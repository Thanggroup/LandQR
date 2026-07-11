let mapInstance = null;
let parcelPolygon = null;
let cornerMarkers = [];

function initializeLeafletMap() {

    mapInstance = L.map("viewer");

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution: "© OpenStreetMap"
        }
    ).addTo(mapInstance);

    mapInstance.setView(
        [
            APP_CONFIG.map.defaultCenter.latitude,
            APP_CONFIG.map.defaultCenter.longitude
        ],
        APP_CONFIG.map.defaultZoom
    );

}

function clearParcel() {

    if (parcelPolygon) {

        mapInstance.removeLayer(parcelPolygon);

        parcelPolygon = null;

    }

}

function displayLeafletParcel(surveyCorners) {

    clearParcel();

    const polygonCoordinates = surveyCorners.map(corner => [

        corner.wgs84.latitude,

        corner.wgs84.longitude

    ]);

    parcelPolygon = L.polygon(polygonCoordinates, APP_CONFIG.styles.polygon).addTo(mapInstance);

    mapInstance.fitBounds(
        parcelPolygon.getBounds(),
        {
            padding: APP_CONFIG.map.fitPadding
        }
    );

    displayCornerMarkers(surveyCorners);

}

function clearCornerMarkers() {

    cornerMarkers.forEach(marker => mapInstance.removeLayer(marker));

    cornerMarkers = [];

}

function displayCornerMarkers(surveyCorners) {

    clearCornerMarkers();

    surveyCorners.forEach(corner => {

        const marker = L.circleMarker(
            [
                corner.wgs84.latitude,
                corner.wgs84.longitude
            ],
            APP_CONFIG.styles.corner
        );

        marker.bindPopup(createCornerPopup(corner));

        marker.addTo(mapInstance);

        cornerMarkers.push(marker);

    });

}