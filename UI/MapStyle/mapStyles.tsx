import styles from '../map.module.css';
import { MapStyleType } from './MapStyleType';
import { mapStyleList } from './MapStyleList';

interface StyleChangeHandler {
    onStyleChange: (style: MapStyleType) => void;
    currentStyle: MapStyleType;
}

export function MapStyleView({ onStyleChange, currentStyle }: StyleChangeHandler) {
    return (
        <div className={styles.mapStyleControl}>
            {mapStyleList.map((style) => (
                <button
                    key={style.name}
                    onClick={() => onStyleChange(style)}
                    className={`${styles.styleButton} ${currentStyle.name === style.name ? styles.selectedStyle : ''}`}
                >
                    {style.name}
                </button>
            ))}
        </div>
    );
} 