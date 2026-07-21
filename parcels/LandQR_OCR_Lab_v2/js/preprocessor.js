function preprocessCanvas(canvas) {
    const output = document.createElement("canvas");
    output.width = canvas.width;
    output.height = canvas.height;

    const context = output.getContext("2d");
    context.drawImage(canvas, 0, 0);

    const imageData = context.getImageData(
        0,
        0,
        output.width,
        output.height
    );

    const pixels = imageData.data;

    const threshold = 160;

    for (let i = 0; i < pixels.length; i += 4) {

        const gray =
            pixels[i] * 0.299 +
            pixels[i + 1] * 0.587 +
            pixels[i + 2] * 0.114;

        const value =
            gray > threshold ? 255 : 0;

        pixels[i] = value;
        pixels[i + 1] = value;
        pixels[i + 2] = value;
    }

    context.putImageData(imageData, 0, 0);

    return output;
}