async function recognizeRegion(canvas) {
    const worker = getOcrWorker();

    const {
        data: { text }
    } = await worker.recognize(canvas);

    return text;
}

async function debugOcr(canvas) {
    console.log("Starting OCR...");

    const text = await recognizeRegion(canvas);

    console.log("OCR Result:");
    console.log(text);
}