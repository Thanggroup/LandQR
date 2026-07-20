function drawOverlay(
    canvas,
    regions
) {

    const context =
        canvas.getContext("2d");

    drawRegion(

        context,

        regions.metadata,

        "dodgerblue",

        "Metadata"

    );

    drawRegion(

        context,

        regions.coordinates,

        "lime",

        "Coordinates"

    );

    drawRegion(

        context,

        regions.planning,

        "orange",

        "Planning"

    );

}

function drawRegion(
    context,
    region,
    color,
    label
) {

    context.save();

    context.lineWidth = 5;

    context.strokeStyle =
        color;

    context.strokeRect(

        region.x,
        region.y,
        region.width,
        region.height

    );

    context.fillStyle =
        color;

    context.font =
        "bold 28px Arial";

    context.fillText(

        label,

        region.x + 10,

        region.y + 35

    );

    context.restore();

}