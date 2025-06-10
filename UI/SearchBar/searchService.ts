interface SearchResult {
    lat: number;
    lon: number;
    display_name: string;
    type: string;
}

export async function searchLocation(query: string): Promise<SearchResult | null> {
    if (!query.trim()) return null;

    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=vn&limit=1`
        );
        const data = await response.json();

        if (data && data.length > 0) {
            const { lat, lon, display_name, type } = data[0];
            return {
                lat: parseFloat(lat),
                lon: parseFloat(lon),
                display_name,
                type
            };
        }
        return null;
    } catch (error) {
        console.error('Error searching location:', error);
        throw new Error('Có lỗi xảy ra khi tìm kiếm!');
    }
}

export function getZoomLevelByType(type: string): number {
    switch (type) {
        case 'country':
            return 6;
        case 'state':
        case 'administrative':
            return 10;
        case 'city':
        case 'town':
            return 12;
        case 'village':
        case 'suburb':
            return 14;
        default:
            return 15;
    }
} 