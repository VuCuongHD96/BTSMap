export async function fetchGoogleSheetData() {
    console.log('Starting to fetch Google Sheet data...');
    try {
        // Use absolute URL for API endpoint
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
        const response = await fetch(`${baseUrl}/api/google-sheets`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Check if data exists and has the expected structure
        if (!data || !data.data || !Array.isArray(data.data)) {
            console.error('Invalid data structure received:', data);
            return [];
        }
        
        return data.data;
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        return [];
    }
} 