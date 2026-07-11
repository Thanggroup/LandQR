// const ACTIVE_VIEWER = "leaflet";
const ACTIVE_VIEWER = "earth";

function initializeMap() {

    if (ACTIVE_VIEWER === "leaflet") {

        initializeLeafletMap();

    }
    else {

        initializeEarthMap();

    }

}

function displayParcel(surveyCorners) {

    if (ACTIVE_VIEWER === "leaflet") {

        displayLeafletParcel(surveyCorners);

    }
    else {

        displayEarthParcel(surveyCorners);

    }

}