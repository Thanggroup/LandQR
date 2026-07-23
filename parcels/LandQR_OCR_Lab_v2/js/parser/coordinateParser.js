function parseCoordinates(text) {
  resetCoordinates();

  landDocument.coordinates.rawText = text;

  extractCoordinatePoints(text);
}

function resetCoordinates() {
  landDocument.coordinates.rawText = "";

  landDocument.coordinates.points = [];
}

function extractCoordinatePoints(text) {}
