function cropRegion(
    sourceCanvas,
    region
) {

    const cropCanvas =
        document.createElement(
            "canvas"
        );

    cropCanvas.width =
        region.width;

    cropCanvas.height =
        region.height;

    const context =
        cropCanvas.getContext(
            "2d"
        );

    context.drawImage(

        sourceCanvas,

        region.x,
        region.y,

        region.width,
        region.height,

        0,
        0,

        region.width,
        region.height

    );

    return cropCanvas;

}