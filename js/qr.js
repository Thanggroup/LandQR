function generateParcelQr(parcelId) {

    const container = document.getElementById("qrCode");

    console.log(container);

    container.innerHTML = "";

    const parcelUrl = buildParcelUrl(parcelId);

    new QRCode(container, {
        text: parcelUrl,
        width: 200,
        height: 200
    });

    console.log("QR function started");

}