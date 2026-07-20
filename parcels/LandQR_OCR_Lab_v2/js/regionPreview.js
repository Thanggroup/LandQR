function initializeRegionPreview(
    fabricCanvas,
    sourceCanvas
){
    const button = document.getElementById("previewButton");

    button.addEventListener("click", async () => {

        const objects = fabricCanvas.getObjects();

        for (const object of objects) {

            const region = {
                x: object.left,
                y: object.top,
                width: object.width * object.scaleX,
                height: object.height * object.scaleY
            };

            const preview = cropRegion(
                sourceCanvas,
                region
            );

            const text = await recognizeRegion(preview);
            console.log(text);

            if (object.name === "metadata") {
                showPreview("metadataPreview", preview);
            }

            if (object.name === "coordinates") {
                showPreview("coordinatePreview", preview);
            }

            if (object.name === "planning") {
                showPreview("planningPreview", preview);
            }
        }

    });
}


function showPreview(
    containerId,
    canvas
) {

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