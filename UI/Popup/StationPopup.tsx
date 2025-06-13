import { Station } from '../../src/app/GoogleSheet/Fetch/Station';
import { Popup } from 'react-leaflet';


interface StationPopupProps {
    station: Station;
}

export function StationPopup({ station }: StationPopupProps) {
    return (
        <Popup minWidth={600}>
            <div>
                <div style={{ fontSize: '14px' }}>
                    <GeneralInformation station={station} />
                    <DetailedInformation station={station} />
                </div>
            </div>
        </Popup>
    );
}

function GeneralInformation({ station }: StationPopupProps) {
    return (
        <div>
            <div style={{ marginBottom: '10px', fontSize: '20px', backgroundColor: '#0355b2', color: 'white', padding: '5px', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flexGrow: 1 }}><strong>Thông tin chung</strong></div>
            </div>
            <div style={{ marginLeft: '10px' }}>
                <strong>Thời gian tiếp nhận:</strong> {station.receivedTime || 'N/A'}<br />
                <strong>Nhà cung cấp:</strong> {station.provider || 'N/A'}<br />
                <strong>Địa chỉ:</strong> {station.address || 'N/A'}<br />
                <strong>Xã (phường) đặt nhà trạm:</strong> {station.ward || 'N/A'}<br />
                <strong>Huyện (quận) đặt nhà trạm:</strong> {station.district || 'N/A'}<br />
            </div>
        </div>
    );
}

function DetailedInformation({ station }: StationPopupProps) {
    return (
        <div style={{ paddingTop: '15px' }}>
            <div style={{ backgroundColor: '#0356b2', fontSize: '18px', color: 'white', padding: '5px', textAlign: 'center' }}>
                <strong>Thông tin chi tiết</strong><br />
            </div>
            <div style={{ marginLeft: '10px', paddingBottom: '10px', overflowX: 'auto' }}>
                <table style={{ borderCollapse: 'collapse' }}>
                    <tr>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Mã SITE/LAC</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Tên trạm gốc</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Mã cell</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Mã phường (xã) đặt trạm</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Mã huyện (quận) đặt trạm</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Tỉnh (thành phố) đặt nhà trạm</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Mã tỉnh/ thành phố (đặt trạm)</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Kinh độ</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Vĩ độ</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Độ cao ăng-ten (m)</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Hãng sản xuất ăng-ten</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Chủng loại ăng-ten</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Kiểu ăng-ten</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Phân cực ăng-ten</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Tăng ích của ăng-ten (dBi)</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Góc phương vị của ăng-ten (deg)</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Góc cụp của ăng-ten (deg)</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Độ rộng búp sóng chính của ăng-ten (deg)</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Hãng sản xuất máy phát VTĐ</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Chủng loại thiết bị máy phát VTĐ</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Công suất phát (dBm)</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Tần số phát (MHz)</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Băng thông (MHz)</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Công nghệ vô tuyến</strong></td>
                        <td style={{ padding: '4px', border: '1px solid #ddd', minWidth: '150px' }}><strong>Ghi chú</strong></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.siteLac || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.stationName || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.cellCode || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.wardCode || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.districtCode || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.province || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.provinceCode || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.longitude || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.latitude || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.antennaHeight || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.antennaManufacturer || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.antennaType || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.antennaModel || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.polarization1 || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.polarization2 || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.azimuthAngle || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.tiltAngle || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.beamWidth || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.transmitterManufacturer || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.transmitterType || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.transmitPower || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.transmitFrequency || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.bandwidth || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.radioTechnology || 'N/A'}</td>
                        <td style={{ padding: '4px', border: '1px solid #ddd' }}>{station.notes || 'N/A'}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}