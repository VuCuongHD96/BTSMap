import { Station } from './Station';

type GoogleSheetRow = (string | number)[];

export function translateGoogleSheetData(data: GoogleSheetRow[]): Station[] {
    return data.slice(1).map((row: GoogleSheetRow) => ({
        siteLac: String(row[0] || ''),
        stationName: String(row[1] || ''),
        cellCode: String(row[2] || ''),
        address: String(row[3] || ''),
        ward: String(row[4] || ''),
        wardCode: String(row[5] || ''),
        district: String(row[6] || ''),
        districtCode: String(row[7] || ''),
        province: String(row[8] || ''),
        provinceCode: String(row[9] || ''),
        longitude: Number(row[10]) || 0,
        latitude: Number(row[11]) || 0,
        antennaHeight: Number(row[12]) || 0,
        antennaManufacturer: String(row[13] || ''),
        antennaType: String(row[14] || ''),
        antennaModel: String(row[15] || ''),
        polarization1: String(row[16] || ''),
        polarization2: String(row[17] || ''),
        azimuthAngle: Number(row[18]) || 0,
        tiltAngle: Number(row[19]) || 0,
        beamWidth: Number(row[20]) || 0,
        transmitterManufacturer: String(row[21] || ''),
        transmitterType: String(row[22] || ''),
        transmitPower: Number(row[23]) || 0,
        transmitFrequency: Number(row[24]) || 0,
        bandwidth: Number(row[25]) || 0,
        radioTechnology: String(row[26] || ''),
        notes: String(row[27] || ''),
        receivedTime: String(row[28] || ''),
        provider: String(row[29] || '')
    }));
} 