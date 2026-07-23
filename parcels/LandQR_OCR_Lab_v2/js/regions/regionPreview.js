let previewFabricCanvas = null;
let previewSourceCanvas = null;

function initializeRegionPreview() {
  const button = document.getElementById("previewButton");

  button.addEventListener("click", runRegionPreview);
}

function updateRegionPreview(fabricCanvas, sourceCanvas) {
  previewFabricCanvas = fabricCanvas;
  previewSourceCanvas = sourceCanvas;
}

async function runRegionPreview() {
  if (!previewFabricCanvas || !previewSourceCanvas) {
    console.warn("Region Preview has not been initialized.");
    return;
  }

  const objects = previewFabricCanvas.getObjects();

  const ocrResult = {
    metadata: "",
    coordinates: "",
    planning: "",
  };

  for (const object of objects) {
    const region = {
      x: object.left,
      y: object.top,
      width: object.width * object.scaleX,
      height: object.height * object.scaleY,
    };

    const preview = cropRegion(previewSourceCanvas, region);

    let text = "";

    if (object.name === "metadata" || object.name === "planning") {
      const currentCanvas = preprocessCanvas(preview);

      const experimentalCanvas = preprocessCanvasExperiment(preview);

      const currentText = await recognizeRegion(currentCanvas);

      const experimentalText = await recognizeRegion(experimentalCanvas);

      console.log("========== " + object.name.toUpperCase() + " ==========");

      console.log("Current OCR:");

      console.log(currentText);

      console.log("Experimental OCR:");

      console.log(experimentalText);

      // Continue using the current OCR result
      text = currentText;
    } else {
      const processedCanvas = preprocessCanvas(preview);

      text = await recognizeRegion(processedCanvas);
    }

    if (object.name === "metadata") {
      showPreview("metadataPreview", preview);

      ocrResult.metadata = text;
    }

    if (object.name === "coordinates") {
      showPreview("coordinatePreview", preview);

      ocrResult.coordinates = text;
    }

    if (object.name === "planning") {
      showPreview("planningPreview", preview);

      ocrResult.planning = text;
    }
  }

  documentParser(ocrResult);

  console.log(landDocument);
}

function showPreview(containerId, canvas) {
  const container = document.getElementById(containerId);

  container.innerHTML = "";

  const image = new Image();

  image.src = canvas.toDataURL();

  image.style.width = "600px";
  image.style.maxWidth = "100%";
  image.style.height = "auto";
  image.style.border = "2px solid #888";

  container.appendChild(image);
}
