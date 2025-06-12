import { Station } from './Station';

export function translateGoogleSheetData(data: any[]): Station[] {
    return data.slice(1).map((row: any[]) => ({
        siteLac: row[0] || '',
        stationName: row[1] || '',
        cellCode: row[2] || '',
        address: row[3] || '',
        ward: row[4] || '',
        wardCode: row[5] || '',
        district: row[6] || '',
        districtCode: row[7] || '',
        province: row[8] || '',
        provinceCode: row[9] || '',
        longitude: Number(row[10]) || 0,
        latitude: Number(row[11]) || 0,
        antennaHeight: Number(row[12]) || 0,
        antennaManufacturer: row[13] || '',
        antennaType: row[14] || '',
        antennaModel: row[15] || '',
        polarization1: row[16] || '',
        polarization2: row[17] || '',
        azimuthAngle: Number(row[18]) || 0,
        tiltAngle: Number(row[19]) || 0,
        beamWidth: Number(row[20]) || 0,
        transmitterManufacturer: row[21] || '',
        transmitterType: row[22] || '',
        transmitPower: Number(row[23]) || 0,
        transmitFrequency: Number(row[24]) || 0,
        bandwidth: Number(row[25]) || 0,
        radioTechnology: row[26] || '',
        notes: row[27] || '',
        receivedTime: row[28] || '',
        provider: row[29] || ''
    }));
} 