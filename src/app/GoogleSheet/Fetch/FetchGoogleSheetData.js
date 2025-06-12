import { NextResponse } from 'next/server';

export async function fetchGoogleSheetData() {
    console.log('Starting to fetch Google Sheet data...');
    try {
        const response = await fetch('/api/google-sheets');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'An unknown error occurred' },
            { status: 500 }
        );
    }
} 