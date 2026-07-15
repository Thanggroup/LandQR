const PUBLISH_URL = APP_CONFIG.api.url + "/publish";

function buildPublishedParcel(
    parcelName,
    surveyCorners,
    imagery
) {

    return {

        version: 1,

        viewer: {

            cesium: {

                accessToken:
                    APP_CONFIG.cesium.accessToken,

                parcelHeight:
                    APP_CONFIG.cesium.parcelHeight

            }

        },

        parcel: {

            name: parcelName,

            surveyCorners: surveyCorners

        },

        imagery: imagery

    };

}

async function publishParcel(parcel) {

    const response = await fetch(
        PUBLISH_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parcel)
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to publish parcel."
        );
    }

    const result = await response.json();

    return result.id;
}