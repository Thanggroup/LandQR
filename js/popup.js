function createCornerPopup(corner) {

    return `
        <strong>Corner P${corner.id}</strong>
        <hr>
        <strong>VN2000</strong><br>
        Easting: ${corner.vn2000.easting.toFixed(2)}<br>
        Northing: ${corner.vn2000.northing.toFixed(2)}
        <hr>
        <strong>WGS84</strong><br>
        Latitude: ${corner.wgs84.latitude.toFixed(9)}<br>
        Longitude: ${corner.wgs84.longitude.toFixed(9)}
    `;

}