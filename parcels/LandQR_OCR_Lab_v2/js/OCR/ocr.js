async function recognizeRegion(canvas) {
    const worker = getOcrWorker();

    const scaledCanvas = scaleCanvas(canvas, 6);

    const {
        data: { text }
    } = await worker.recognize(scaledCanvas);

    return text;
}

async function testOcr(canvas) {
    console.log("Starting OCR...");

    const text = await recognizeRegion(canvas);

    console.log("OCR Result:");
    console.log(text);
}

function scaleCanvas(sourceCanvas, scale) {
    const scaledCanvas = document.createElement("canvas");

    scaledCanvas.width = sourceCanvas.width * scale;
    scaledCanvas.height = sourceCanvas.height * scale;

    const context = scaledCanvas.getContext("2d");

    context.imageSmoothingEnabled = true;

    context.drawImage(
        sourceCanvas,
        0,
        0,
        scaledCanvas.width,
        scaledCanvas.height
    );

    return scaledCanvas;
}