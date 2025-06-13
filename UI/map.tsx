'use client';

import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import styles from './map.module.css';
import { MapStyleView } from './MapStyle/mapStyles';
import { MapStyleType } from './MapStyle/MapStyleType';
import { mapStyleList } from './MapStyle/MapStyleList';
import { SearchBarView } from './SearchBar/SearchBarView';
import { searchLocation, getZoomLevelByType } from './SearchBar/searchService';
import { fetchGoogleSheetData } from '../src/app/GoogleSheet/Fetch/FetchGoogleSheetData';
import { translateGoogleSheetData } from '../src/app/GoogleSheet/Fetch/Translator';
import { Station } from '../src/app/GoogleSheet/Fetch/Station';
import { StationPopup } from './Popup/StationPopup';

function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export function Map() {
    const [currentStyle, setCurrentStyle] = useState<MapStyleType>(mapStyleList[0]);
    const [searchResults, setSearchResults] = useState<[number, number] | null>(null);
    const [zoomLevel, setZoomLevel] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const [stations, setStations] = useState<Station[]>([]);

    useEffect(() => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchGoogleSheetData();
                const translatedStations = translateGoogleSheetData(data);
                setStations(translatedStations);
            } catch (error) {
                console.error('Error fetching Google Sheet data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = async (query: string) => {
        setIsLoading(true);
        try {
            const result = await searchLocation(query);
            if (result) {
                setSearchResults([result.lat, result.lon]);
                setZoomLevel(getZoomLevelByType(result.type));
            } else {
                alert('Không tìm thấy địa điểm!');
            }
        } catch (error) {
            alert(error instanceof Error ? error.message : 'Có lỗi xảy ra khi tìm kiếm!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.mapContainer}>
            <SearchBarView onSearch={handleSearch} isLoading={isLoading} />
            <MapContainer
                center={[16.047079, 108.206230]}
                zoom={zoomLevel}
                className={styles.map}
            >
                <TileLayer
                    attribution={currentStyle.attribution}
                    url={currentStyle.url}
                />
                {searchResults && (
                    <>
                        <ChangeView center={searchResults} zoom={zoomLevel} />
                    </>
                )}
                {stations.map((station, index) => (
                    <Marker
                        key={index}
                        position={[station.latitude, station.longitude]}
                    >
                        <StationPopup station={station} />
                    </Marker>
                ))}
                <MapStyleView onStyleChange={setCurrentStyle} currentStyle={currentStyle} />
            </MapContainer>
        </div>
    );
}