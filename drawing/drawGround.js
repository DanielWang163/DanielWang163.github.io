function drawGrounds(x, y, numGrounds) {
    // For loop: When you have repetition in your code, 
    // you want to finish withjust one instance of the repetitionx
    for (var i = 0; i < numGrounds; i++) {
        ctx.save();
        ctx.translate(i * 16 * UNIT + x * UNIT, y * UNIT);
        drawGround();
        ctx.restore();
    }
}

function drawGround() {
    ctx.fillStyle = "#6C9547";
    ctx.fillRect(0 * UNIT, 0 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(3 * UNIT, 0 * UNIT, 1 * UNIT, 1 * UNIT)
}
