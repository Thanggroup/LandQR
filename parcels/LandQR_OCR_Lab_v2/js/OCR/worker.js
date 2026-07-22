let ocrWorker = null;

async function initializeOcrWorker() {
    if (ocrWorker) {
        return;
    }

    console.log("Initializing OCR Worker...");

    ocrWorker = await Tesseract.createWorker("eng+vie");

    await ocrWorker.setParameters({
         tessedit_pageseg_mode: Tesseract.PSM.SINGLE_COLUMN,
         user_defined_dpi: "300"
    });

    console.log("OCR Worker Ready");
}

async function terminateOcrWorker() {
    if (!ocrWorker) {
        return;
    }

    await ocrWorker.terminate();

    ocrWorker = null;
}

function getOcrWorker() {
    if (!ocrWorker) {
        throw new Error("OCR Worker has not been initialized.");
    }

    return ocrWorker;
}