const zoomableList = document.getElementsByClassName("zoomable");

const zoomDiv = document.getElementById("zoom-view");
const zoomBackground = document.getElementById("zoom-background");
const zoomImage = document.getElementById("zoom-image");

function setupZoomableImages() {
    for (let i = 0 ; i < zoomableList.length ; i++) {
        zoomableList[i].addEventListener('click', showZoomView);
    }

    zoomBackground.addEventListener('click', hideZoomView);
}

function showZoomView(event) {
    zoomImage.src = event.currentTarget.src;
    zoomDiv.style.display = "inline";

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100%";
}

function hideZoomView(event) {
    zoomDiv.style.display = "none";
    zoomImage.src = "";

    document.documentElement.style.overflow = "auto";
    document.documentElement.style.height = "auto";
}