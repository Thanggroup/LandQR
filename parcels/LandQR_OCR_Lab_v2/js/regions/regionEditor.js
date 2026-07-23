let fabricCanvas = null;

function initializeRegionEditor() {
  const pdfCanvas = document.getElementById("viewer");

  const layer = document.getElementById("regionLayer");

  layer.width = pdfCanvas.width;

  layer.height = pdfCanvas.height;

  fabricCanvas = new fabric.Canvas("regionLayer", {
    selection: true,
    preserveObjectStacking: true,
  });

  fabricCanvas.setWidth(pdfCanvas.width);
  fabricCanvas.setHeight(pdfCanvas.height);

  const wrapper = fabricCanvas.wrapperEl;

  wrapper.style.width = pdfCanvas.clientWidth + "px";
  wrapper.style.height = pdfCanvas.clientHeight + "px";

  fabricCanvas.upperCanvasEl.style.width = "100%";
  fabricCanvas.upperCanvasEl.style.height = "100%";

  fabricCanvas.lowerCanvasEl.style.width = "100%";
  fabricCanvas.lowerCanvasEl.style.height = "100%";

  fabricCanvas.backgroundColor = "transparent";
}

function createRegions() {
  const width = fabricCanvas.getWidth();

  const height = fabricCanvas.getHeight();

  addRegion(
    width * 0.05,
    height * 0.05,
    width * 0.65,
    height * 0.12,
    "metadata",
  );

  addRegion(
    width * 0.72,
    height * 0.25,
    width * 0.22,
    height * 0.35,
    "coordinates",
  );

  addRegion(
    width * 0.05,
    height * 0.65,
    width * 0.75,
    height * 0.25,
    "planning",
  );

  fabricCanvas.renderAll();
}

function addRegion(x, y, width, height, label) {
  const rect = new fabric.Rect({
    left: x,
    top: y,

    width,
    height,

    fill: "rgba(0,120,255,0.15)",

    stroke: "blue",

    strokeWidth: 3,

    name: label,
  });

  fabricCanvas.add(rect);
}
