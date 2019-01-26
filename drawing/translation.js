var canvas;
var ctx;
const UNIT = 25;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    translatedRect();
    translatedCharacter();
    translatedAdidas();
    translatedFortuneTeller();
}

function translatedRect() {
    ctx.save(); // Saving the translation rules.
    ctx.translate(1*UNIT, 1*UNIT); // Translate th eimage below to soecify x and y corrdinates.
    ctx.fillRect(0*UNIT,0*UNIT,10*UNIT,10*UNIT);
    ctx.restore(); // Resets the translation rules.
}

function translatedCharacter() {
    drawCharacter();
}

function translatedAdidas() {
    drawAdidas();
}
