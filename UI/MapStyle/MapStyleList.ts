import { streetMapStyle, satelliteMapStyle, terrainMapStyle } from './MapStyleDeclare';
import { MapStyleType } from './MapStyleType';

export const mapStyleList: MapStyleType[] = [
    streetMapStyle,
    satelliteMapStyle,
    terrainMapStyle
];
