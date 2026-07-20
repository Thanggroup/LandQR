async function recognizeRegion(canvas) {
    const {
        data: { text }
    } = await Tesseract.recognize(
        canvas,
        "eng",
        {
            logger: message => {
                console.log(message);
            }
        }
    );

    return text;
}

async function testOcr(canvas) {
    console.log("Starting OCR...");

    const text = await recognizeRegion(canvas);

    console.log("OCR Result:");
    console.log(text);
}