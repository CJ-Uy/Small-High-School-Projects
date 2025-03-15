var toggled = 0;

function toggleSprite() {
    if (toggled == 0) {
        openSprite();
        toggled = 1;
    } else {
        closeSprite();
        toggled = 0;
    }
}

function openSprite() {
    document.getElementById("media-links").style.maxHeight = "150vh";
}

function closeSprite() {
    document.getElementById("media-links").style.maxHeight = "0";
}