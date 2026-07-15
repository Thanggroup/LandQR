function generateParcelQr(url) {

    const container = document.getElementById("qrCode");

    container.innerHTML = "";

    new QRCode(container, {
        text: url,
        width: 200,
        height: 200
    });

}