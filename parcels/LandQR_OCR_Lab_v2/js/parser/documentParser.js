function documentParser(ocrResult) {
  parseMetadata(ocrResult.metadata);

  parseCoordinates(ocrResult.coordinates);

  parsePlanning(ocrResult.planning);
}
