import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: "./src/app/GoogleSheet/Fetch/credentials.json",
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });
        const client = await auth.getClient();

        const googleSheets = google.sheets({ version: "v4", auth: client });

        const getRows = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId: "1Mm_xxrdwJq-dEHoFBSdrRzBV2BU7BKHCWpmZmhbmxIE",
            range: "Sheet1",
        });

        return NextResponse.json({ data: getRows.data.values });
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'An unknown error occurred' },
            { status: 500 }
        );
    }
} 