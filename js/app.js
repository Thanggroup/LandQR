let currentParcelName = null;
let currentSurveyCorners = null;
function getParcelId() {

    const urlParameters = new URLSearchParams(window.location.search);

    return urlParameters.get("id") ?? "demo";

}

async function main() {

    try {

        initializeMap();

        const parcelId = getParcelId();

        const parcelText = await loadParcel(parcelId);

        await loadParcelFromText(
            parcelId,
            parcelText
        );

        document
            .getElementById("parcelFileInput")
            .addEventListener(
                "change",
                async function (event) {

                    const file =
                        event.target.files[0];

                    if (!file) {

                        return;

                    }

                    const parcelText = await openParcelFile(file);

                    await loadParcelFromText(
                        file.name.replace(".txt", ""),
                        parcelText
                    );

                }
            );

        document
            .getElementById("exportKmlButton")
            .addEventListener("click", function () {

                if (!currentSurveyCorners) {

                    return;

                }

                exportParcelToKml(
                    currentParcelName,
                    currentSurveyCorners
                );

            });

    }
    catch (error) {

        console.error(error);

    }

}

async function loadParcelFromText(parcelName, parcelText) {

    const parcelPoints = parseParcelText(parcelText);

    const surveyCorners = buildSurveyCorners(parcelPoints);

    displayParcel(surveyCorners);

    document.getElementById("parcelName").textContent = parcelName;

    document.getElementById("cornerCount").textContent = surveyCorners.length - 1;

    currentParcelName = parcelName;
    currentSurveyCorners = surveyCorners;
    const center = surveyCorners[0].wgs84;

    const metadata =
        await loadImageryMetadata(
            center.latitude,
            center.longitude
        );

    const imagery = formatImageryMetadata(metadata);

    updateImageryPanel(imagery);

    const publishedParcel = buildPublishedParcel(
        parcelName,
        surveyCorners,
        imagery
    );

    const parcelId = await publishParcel(
        publishedParcel
    );

    const viewerUrl = buildViewerUrl(parcelId);

    generateParcelQr(viewerUrl);

    console.log(viewerUrl);
}

main();
