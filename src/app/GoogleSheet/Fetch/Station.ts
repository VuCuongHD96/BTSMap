export interface Station {
    siteLac: string;                // Site/LAC Code
    stationName: string;            // Base Station Name
    cellCode: string;               // Cell Code
    address: string;                // Address
    ward: string;                   // Ward/Commune
    wardCode: string;               // Ward/Commune Code
    district: string;               // District
    districtCode: string;           // District Code
    province: string;               // Province/City
    provinceCode: string;           // Province/City Code
    longitude: number;              // Longitude
    latitude: number;               // Latitude
    antennaHeight: number;          // Antenna Height (m)
    antennaManufacturer: string;    // Antenna Manufacturer
    antennaType: string;            // Antenna Type
    antennaModel: string;           // Antenna Model
    polarization1: string;          // Antenna Polarization 1
    polarization2: string;          // Antenna Polarization 2
    azimuthAngle: number;           // Azimuth Angle (deg)
    tiltAngle: number;              // Tilt Angle (deg)
    beamWidth: number;              // Main Beam Width (deg)
    transmitterManufacturer: string; // Transmitter Manufacturer
    transmitterType: string;        // Transmitter Type
    transmitPower: number;          // Transmit Power (dBm)
    transmitFrequency: number;      // Transmit Frequency (MHz)
    bandwidth: number;              // Bandwidth (MHz)
    radioTechnology: string;        // Radio Technology
    notes: string;                  // Notes
    receivedTime: string;           // Received Time
    provider: string;               // Provider
  }