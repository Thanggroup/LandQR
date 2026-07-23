function documentParser(ocrResult) {
  landDocument.metadata = parseMetadata(ocrResult.metadata);

  landDocument.coordinates = parseCoordinates(ocrResult.coordinates);

  landDocument.planning.rawText = parsePlanning(ocrResult.planning);
}
