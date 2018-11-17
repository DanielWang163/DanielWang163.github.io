// // Variable
// var x = 0;
// x = 1;

// // Costant
// const y = 0;
// y = 1;

var canvas;
var ctx;
var unit = 10;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // drawRuler(10);
    ctx.fillStyle = "red";
    ctx.fillRect(0,0,100,100);