let earthViewer = null;

let earthParcel = null;

function initializeEarthMap() {

    Cesium.Ion.defaultAccessToken = APP_CONFIG.cesium.accessToken;

    earthViewer = new Cesium.Viewer(
        "viewer",
        {

            requestRenderMode: true,

            maximumRenderTimeChange: Infinity,

            animation: false,

            timeline: false,

            baseLayerPicker: false,

            geocoder: false,

            homeButton: false,

            navigationHelpButton: false,

            sceneModePicker: false,

            fullscreenButton: false,

            infoBox: false,

            selectionIndicator: false

        }
    );

}

function displayEarthParcel(surveyCorners) {

    if (earthParcel) {

        earthViewer.entities.remove(earthParcel);

    }

    const coordinates = [];

    surveyCorners.forEach(function (corner) {

        coordinates.push(corner.wgs84.longitude);

        coordinates.push(corner.wgs84.latitude);

    });

    earthParcel = earthViewer.entities.add({

        polygon: {

            hierarchy:
                Cesium.Cartesian3.fromDegreesArray(
                    coordinates
                ),

            height: APP_CONFIG.cesium.parcelHeight,

            material:
                Cesium.Color.BLUE.withAlpha(0.5),

            outline: true,

            outlineColor:
                Cesium.Color.BLUE

        }

    });

    earthViewer.flyTo(earthParcel);

}