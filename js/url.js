function buildParcelUrl(parcelId) {

    const currentUrl = new URL(window.location.href);

    currentUrl.searchParams.set("id", parcelId);

    return currentUrl.toString();

}

function buildViewerUrl(parcelId) {

    return (
        "http://localhost:5500"
        + "/?id="
        + encodeURIComponent(parcelId)
    );

}