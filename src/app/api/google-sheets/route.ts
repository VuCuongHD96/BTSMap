import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { existsSync } from 'fs';

export async function GET() {
    try {
        let auth;
        
        // Check if we're in development environment
        if (process.env.NODE_ENV === 'development') {
            const credentialsPath = "./src/app/GoogleSheet/Fetch/credentials.json";
            if (!existsSync(credentialsPath)) {
                console.error('Credentials file not found at:', credentialsPath);
                return NextResponse.json(
                    { error: 'Google Sheets credentials not configured' },
                    { status: 500 }
                );
            }
            auth = new google.auth.GoogleAuth({
                keyFile: credentialsPath,
                scopes: "https://www.googleapis.com/auth/spreadsheets",
            });
        } else {
            // Production environment - use environment variables
            console.log('Using production environment variables');
            
            // Check if all required environment variables are present
            const requiredEnvVars = [
                'GOOGLE_PROJECT_ID',
                'GOOGLE_PRIVATE_KEY_ID',
                'GOOGLE_PRIVATE_KEY',
                'GOOGLE_CLIENT_EMAIL',
                'GOOGLE_CLIENT_ID',
                'GOOGLE_CLIENT_CERT_URL',
                'GOOGLE_SHEET_ID'
            ];

            const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
            if (missingVars.length > 0) {
                console.error('Missing required environment variables:', missingVars);
                return NextResponse.json(
                    { error: 'Missing required environment variables' },
                    { status: 500 }
                );
            }

            const credentials = {
                type: "service_account",
                project_id: process.env.GOOGLE_PROJECT_ID,
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL
            };

            console.log('Initializing Google Auth with credentials');
            auth = new google.auth.GoogleAuth({
                credentials,
                scopes: "https://www.googleapis.com/auth/spreadsheets",
            });
        }

        console.log('Creating Google Sheets client');
        const googleSheets = google.sheets({ version: "v4", auth });

        console.log('Fetching data from Google Sheets');
        const getRows = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId: process.env.GOOGLE_SHEET_ID || "1Mm_xxrdwJq-dEHoFBSdrRzBV2BU7BKHCWpmZmhbmxIE",
            range: "Sheet1",
        });

        if (!getRows.data.values) {
            console.log('No data found in spreadsheet');
            return NextResponse.json({ data: [] });
        }

        console.log('Successfully fetched data from Google Sheets');
        return NextResponse.json({ data: getRows.data.values });
    } catch (error) {
        console.error('Error in Google Sheets API:', error);
        // Log more details about the error
        if (error instanceof Error) {
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        return NextResponse.json(
            { 
                error: error instanceof Error ? error.message : 'An unknown error occurred',
                details: error
            },
            { status: 500 }
        );
    }
} 