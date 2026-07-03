function parseParcelText(parcelText) {

    const lines = parcelText
        .trim()
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");

    return lines.map(parseParcelLine);

}

function parseParcelLine(line) {

    const coordinateText = line
        .replace("xy=", "")
        .trim();

    const [easting, northing] = coordinateText
        .split(",");

    return {

        easting: Number(easting.trim()),

        northing: Number(northing.trim())

    };

}