// Variable: Something that stores a value that could change over time.

var canvas;
var ctx;
var unit = 2.325;
// var unit = 2;


window.onload = init;
// When the window (page) loads up, it calls the init function.

function init() {
     canvas = document.getElementById("myCanvas");
     // Canvas in jsconnects with canvas in html.
     ctx = canvas.getContext("2d");
    // Setting up the context to 2D
    drawCharacter();
    // drawRuler(10);
}
// Function: A group of task that could be called upon