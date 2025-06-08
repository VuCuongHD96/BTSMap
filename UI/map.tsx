'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import styles from './map.module.css';
import { MapStyleView } from './MapStyle/mapStyles';
import { MapStyleType } from './MapStyle/MapStyleType';
import { mapStyleList } from './MapStyle/MapStyleList';

export function Map() {
    const [currentStyle, setCurrentStyle] = useState<MapStyleType>(mapStyleList[0]);

    useEffect(() => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                center={[16.047079, 108.206230]}
                zoom={6}
                className={styles.map}
            >
                <TileLayer
                    attribution={currentStyle.attribution}
                    url={currentStyle.url}
                />
                <MapStyleView onStyleChange={setCurrentStyle} currentStyle={currentStyle} />
            </MapContainer>
        </div>
    );
}