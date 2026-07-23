let appState = {
  file: null,
  canvas: null,
};

const fileInput = document.getElementById("fileInput");
initializeRegionPreview();

fileInput.addEventListener("change", async (event) => {
  appState.file = event.target.files[0];

  if (!appState.file) {
    return;
  }

  appState.canvas = await renderDocument(appState.file);

  // Initialize OCR Worker once
  await initializeOcrWorker();

  initializeRegionEditor();

  createRegions();

  updateRegionPreview(fabricCanvas, appState.canvas);
});

function refresh() {
  // Fabric.js handles:
  // - drawing regions
  // - moving regions
  // - resizing regions
  if (!fabricCanvas) {
    return;
  }

  fabricCanvas.renderAll();
}

console.log("Checking Tesseract...");
console.log(Tesseract);
console.log("Land Document");
console.log(landDocument);
