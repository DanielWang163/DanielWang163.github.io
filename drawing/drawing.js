// Variable
var x = 0;
x = 1;

// Costant
const y = 0;
y = 1;

var canvas;
var ctx;
var unit = 10;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // Filling a rectange
    drawRuler(10);
    ctx.fillRect(0,0,100,100);
    ctx.fillStyle = "red";
    ctx.fillRect(0,0,100,100);
    ctx.fillStyle = "orange";
    ctx.fillRect(0,200,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0,400,100,100);
    ctx.fillStyle = "green";
    ctx.fillRect(0,600,100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(0,800,100,100);
    ctx.fillStyle = "orange";
    ctx.fillRect(100,100,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(100,300,100,100);
    ctx.fillStyle = "green";
    ctx.fillRect(100,500,100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(100,700,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(100,900,100,100);
    ctx.fillStyle = "orange";
    ctx.fillRect(200,0,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(200,200,100,100);
    ctx.fillStyle = "green";
    ctx.fillRect(200,400,100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(200,600,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(200,800,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(300,100,100,100);
    ctx.fillStyle = "green";
    ctx.fillRect(300,300,100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(300,500,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(300,700,100,100);
    ctx.fillStyle = "red";
    ctx.fillRect(300,900,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(400,0,100,100);
    ctx.fillStyle = "green";
    ctx.fillRect(400,200,100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(400,400,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(400,600,100,100);
    ctx.fillStyle = "red";
    ctx.fillRect(400,800,100,100);
    ctx.fillStyle = "green";
    ctx.fillRect(500,100,100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(500,300,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(500,500,100,100);
    ctx.fillStyle = "red";
    ctx.fillRect(500,700,100,100);
    ctx.fillStyle = "orange";
    ctx.fillRect(500,900,100,100);
    ctx.fillStyle = "green";
    ctx.fillRect(600,0,100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(600,200,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(600,400,100,100);
    ctx.fillStyle = "red";
    ctx.fillRect(600,600,100,100);
    ctx.fillStyle = "orange";
    ctx.fillRect(600,800,100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(700,100,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(700,300,100,100);
    ctx.fillStyle = "red";
    ctx.fillRect(700,500,100,100);
    ctx.fillStyle = "orange";
    ctx.fillRect(700,700,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(700,900,100,100);
    ctx.fillStyle = "blue";
    ctx.fillRect(800,0,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(800,200,100,100);
    ctx.fillStyle = "red";
    ctx.fillRect(800,400,100,100);
    ctx.fillStyle = "orange";
    ctx.fillRect(800,600,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(800,800,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(900,100,100,100);
    ctx.fillStyle = "red";
    ctx.fillRect(900,300,100,100);
    ctx.fillStyle = "orange";
    ctx.fillRect(900,500,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(900,700,100,100);
    ctx.fillStyle = "green";
    ctx.fillRect(900,900,100,100);
}