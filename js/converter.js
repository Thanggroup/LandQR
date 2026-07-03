const WGS84_PROJECTION = "+proj=longlat +datum=WGS84 +no_defs";

const VN2000_PROJECTION =
    "+proj=tmerc +lat_0=0 +lon_0=108.25 +k=0.9999 +x_0=500000 +y_0=0 +ellps=WGS84 +towgs84=-191.90441429,-39.30318279,-111.45032835,-0.00928836,0.01975479,-0.00427372,0.252906278";

function convertPointToWgs84(vn2000Point) {

    const result = proj4(
        VN2000_PROJECTION,
        WGS84_PROJECTION,
        [
            vn2000Point.easting,
            vn2000Point.northing
        ]
    );

    return {
        latitude: result[1],
        longitude: result[0]
    };

}

function convertParcelToWgs84(vn2000Points) {

    return vn2000Points.map(convertPointToWgs84);

}

function buildSurveyCorners(vn2000Points) {

    return vn2000Points.map((point, index) => {

        const wgs84Point = convertPointToWgs84(point);

        return {
            id: index + 1,
            vn2000: point,
            wgs84: wgs84Point
        };

    });

}