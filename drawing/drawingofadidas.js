// // Variable
// var x = 0;
// x = 1;

// // Costant
// const y = 0;
// y = 1;

var canvas;
var ctx;
var UNIT = 9;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    drawAdidas();
}