var root = document.querySelector('html');
var currentwght = document.querySelector('#current-wght');
var currentArcadeFontSize = document.querySelector('#current-arcade-font-size');

function setWGHT(newWght) {
    currentwght.innerText = newWght;
    root.style.setProperty('--wght', newWght);
}
function setArcadeFontSize(newArcadeFontSize) {
    currentArcadeFontSize.innerText = newArcadeFontSize;
    root.style.setProperty('--arcade-font-size', newArcadeFontSize + 'px');
}