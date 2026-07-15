function buildParcelUrl(parcelId) {

    const currentUrl = new URL(window.location.href);

    currentUrl.searchParams.set("id", parcelId);

    return currentUrl.toString();

}

function buildViewerUrl(parcelId) {

    return (
        "https://thanggroup.github.io/LandQR_viewer"
        + "/?id="
        + encodeURIComponent(parcelId)
    );

}