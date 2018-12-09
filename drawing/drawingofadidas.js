// // Variable
// var x = 0;
// x = 1;

// // Costant
// const y = 0;
// y = 1;

var canvas;
var ctx;
var unit = 9.7;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // drawRuler(3);
    ctx.fillStyle = "black";
    // 1st
    ctx.fillRect(3 * unit, 39 * unit, 3 * unit, 6 * unit);
    ctx.fillRect(6 * unit, 39 * unit, 3 * unit, 9 * unit);
    ctx.fillRect(9 * unit, 36 * unit, 3 * unit, 15 * unit);
    ctx.fillRect(12 * unit, 36 * unit, 3 * unit, 15 * unit);
    ctx.fillRect(15 * unit, 33 * unit, 3 * unit, 18 * unit);
    ctx.fillRect(18 * unit, 33 * unit, 3 * unit, 18 * unit);
    ctx.fillRect(21 * unit, 36 * unit, 3 * unit, 15 * unit);
    ctx.fillRect(24 * unit, 39 * unit, 3 * unit, 12 * unit);
    ctx.fillRect(27 * unit, 42 * unit, 3 * unit, 9 * unit);
    ctx.fillRect(30 * unit, 45 * unit, 3 * unit, 6 * unit);
    ctx.fillRect(33 * unit, 48 * unit, 3 * unit, 3 * unit);
    // 2nd 
    ctx.fillRect(24 * unit, 27 * unit, 3 * unit, 6 * unit);
    ctx.fillRect(27 * unit, 27 * unit, 3 * unit, 9 * unit);
    ctx.fillRect(30 * unit, 24 * unit, 3 * unit, 15 * unit);
    ctx.fillRect(33 * unit, 24 * unit, 3 * unit, 18 * unit);
    ctx.fillRect(36 * unit, 21 * unit, 3 * unit, 24 * unit);
    ctx.fillRect(39 * unit, 21 * unit, 3 * unit, 27 * unit);
    ctx.fillRect(42 * unit, 24 * unit, 3 * unit, 27 * unit);
    ctx.fillRect(45 * unit, 27 * unit, 3 * unit, 24 * unit);
    ctx.fillRect(48 * unit, 30 * unit, 3 * unit, 21 * unit);
    ctx.fillRect(51 * unit, 33 * unit, 3 * unit, 18 * unit);
    ctx.fillRect(54 * unit, 36 * unit, 3 * unit, 15 * unit);
    ctx.fillRect(57 * unit, 39 * unit, 3 * unit, 12 * unit);
    ctx.fillRect(60 * unit, 42 * unit, 3 * unit, 9 * unit);
    ctx.fillRect(63 * unit, 45 * unit, 3 * unit, 6 * unit);
    ctx.fillRect(66 * unit, 48 * unit, 3 * unit, 3 * unit);
    // 3rd
    ctx.fillRect(45 * unit, 15 * unit, 3 * unit, 6 * unit);
    ctx.fillRect(48 * unit, 15 * unit, 3 * unit, 9 * unit);
    ctx.fillRect(51 * unit, 12 * unit, 3 * unit, 15 * unit);
    ctx.fillRect(54 * unit, 12 * unit, 3 * unit, 18 * unit);
    ctx.fillRect(57 * unit, 9 * unit, 3 * unit, 24 * unit);
    ctx.fillRect(60 * unit, 9 * unit, 3 * unit, 27 * unit);
    ctx.fillRect(63 * unit, 12 * unit, 3 * unit, 27 * unit);
    ctx.fillRect(66 * unit, 15 * unit, 3 * unit, 27 * unit);
    ctx.fillRect(69 * unit, 18 * unit, 3 * unit, 27 * unit);
    ctx.fillRect(72 * unit, 21 * unit, 3 * unit, 27 * unit);
    ctx.fillRect(75 * unit, 24 * unit, 3 * unit, 27 * unit);
    ctx.fillRect(78 * unit, 27 * unit, 3 * unit, 24 * unit);
    ctx.fillRect(81 * unit, 30 * unit, 3 * unit, 21 * unit);
    ctx.fillRect(84 * unit, 33 * unit, 3 * unit, 18 * unit);
    ctx.fillRect(87 * unit, 36 * unit, 3 * unit, 15 * unit);
    ctx.fillRect(90 * unit, 39 * unit, 3 * unit, 12 * unit);
    ctx.fillRect(93 * unit, 42 * unit, 3 * unit, 9 * unit);
    ctx.fillRect(96 * unit, 45 * unit, 3 * unit, 6 * unit);
    ctx.fillRect(99 * unit, 48 * unit, 3 * unit, 3 * unit);
}