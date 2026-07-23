function parseMetadata(text) {
  resetMetadata();

  landDocument.metadata.rawText = text;

  extractParcelNumber(text);

  extractMapSheet(text);

  extractOldMapSheet(text);
}

function resetMetadata() {
  landDocument.metadata.rawText = "";

  landDocument.metadata.parcelNumber = "";

  landDocument.metadata.mapSheet = "";

  landDocument.metadata.oldMapSheet = "";

  landDocument.metadata.commune = "";

  landDocument.metadata.district = "";

  landDocument.metadata.province = "";

  landDocument.metadata.area = "";

  landDocument.metadata.landType = "";
}

function extractParcelNumber(text) {
  const match = text.match(/Số\s*thứ\s*tự\s*thửa\s*đất\s*:?\s*(\d+)/i);

  if (!match) {
    return;
  }

  landDocument.metadata.parcelNumber = match[1];
}

function extractMapSheet(text) {
  const match = text.match(/Tờ\s*bản\s*đồ\s*số\s*:?\s*(\d+)/i);

  if (!match) {
    return;
  }

  landDocument.metadata.mapSheet = match[1];
}

function extractOldMapSheet(text) {
  const match = text.match(/\(\s*tờ\s*bản\s*đồ\s*số\s*(\d+)/i);

  if (!match) {
    return;
  }

  landDocument.metadata.oldMapSheet = match[1];
}
