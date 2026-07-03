function exportParcelToKml(parcelName, surveyCorners) {

    const coordinateText = buildKmlCoordinates(surveyCorners);

    const kmlDocument = buildKmlDocument(
        parcelName,
        coordinateText
    );

    downloadKml(
        `${parcelName}.kml`,
        kmlDocument
    );

}

function buildKmlCoordinates(surveyCorners) {

    return surveyCorners
        .map(corner =>
            `${corner.wgs84.longitude},${corner.wgs84.latitude},0`
        )
        .join("\n");

}

function buildKmlDocument(parcelName, coordinateText) {

    return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">

<Document>

<name>${parcelName}</name>

<Placemark>

<name>${parcelName}</name>

<Polygon>

<outerBoundaryIs>

<LinearRing>

<coordinates>

${coordinateText}

</coordinates>

</LinearRing>

</outerBoundaryIs>

</Polygon>

</Placemark>

</Document>

</kml>`;

}

function downloadKml(fileName, content) {

    const blob = new Blob(
        [content],
        {
            type: "application/vnd.google-earth.kml+xml"
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = fileName;

    link.click();

    URL.revokeObjectURL(url);

}