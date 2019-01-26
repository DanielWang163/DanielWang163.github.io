// Variable: Something that stores a value that could change over time.

var canvas;
var ctx;
var UNIT =14;


window.onload = init;
// When the window (page) loads up, it calls the init function.

function init() {
     canvas = document.getElementById("myCanvas");
     // Canvas in js connects with canvas in html.
     ctx = canvas.getContext("2d");
    // Setting up the context to 2D
    drawFortuneTeller();
    // drawRuler(1);
}
// Function: A group of task that could be called upon

// Left to right 45
// Top to bottom 67