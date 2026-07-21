async function renderDocument(file) {

    const bytes =
        await file.arrayBuffer();

    const pdf =
        await pdfjsLib.getDocument({

            data: bytes

        }).promise;

    const page =
        await pdf.getPage(1);

    const viewport =
        page.getViewport({

            scale: 6

        });

    const canvas =
        document.getElementById(
            "viewer"
        );

    canvas.width =
        viewport.width;

    canvas.height =
        viewport.height;

    await page.render({

        canvasContext:
            canvas.getContext("2d"),

        viewport

    }).promise;

    return canvas;

}