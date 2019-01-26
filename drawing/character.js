var canvas;
var ctx;
var UNIT = 23;


window.onload = init;

function init() {
     canvas = document.getElementById("myCanvas");
     ctx = canvas.getContext("2d");
    drawCharacter();
}