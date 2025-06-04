function zoomImage(imgElement) {
    const overlay = document.getElementById("overlay");
    const zoomedImg = document.getElementById("zoomed-img");
    zoomedImg.src = imgElement.src;
    overlay.style.display = "flex";
}

function closeZoom() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}



/*function zoomImage(imgElement) {
    const overlay = document.getElementById("overlay");
    const zoomedImg = document.getElementById("zoomed-img");
    zoomedImg.src = imgElement.src;
    overlay.style.display = "flex";   // <-- FONTOS!
}

function closeZoom() {
    document.getElementById("overlay").style.display = "none";
}
*/
