async function loadParcel(parcelId) {

    const response = await fetch(
        `${APP_CONFIG.paths.parcels}/${parcelId}.txt`
    );

    if (!response.ok) {

        throw new Error(
            `Unable to load parcel: ${parcelId}`
        );

    }

    return await response.text();

}

function parseParcel(text) {

    return text
        .trim()
        .split("\n")
        .map(line => {

            const [easting, northing] = line.split(",");

            return {
                easting: parseFloat(easting),
                northing: parseFloat(northing)
            };

        });

}