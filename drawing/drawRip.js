function drawRip(x, y, frame) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT)
    ctx.fillStyle = "grey";
    ctx.fillRect(0 * UNIT, 0 * UNIT, canvas.width, canvas.height)
    if (frame == 1) {
        ctx.fillStyle = "#170D27";
        ctx.fillRect(0 * UNIT, 24 * UNIT, 1 * UNIT, 4 * UNIT)
        ctx.fillRect(0 * UNIT, 31 * UNIT, 1 * UNIT, 1 * UNIT)
        ctx.fillRect(1 * UNIT, 23 * UNIT, 1 * UNIT, 4 * UNIT)
        ctx.fillRect(1 * UNIT, 28 * UNIT, 1 * UNIT, 4 * UNIT)
        ctx.fillRect(2 * UNIT, 22 * UNIT, 1 * UNIT, 12 * UNIT)
        ctx.fillRect(3 * UNIT, 21 * UNIT, 1 * UNIT, 14 * UNIT)
        ctx.fillRect(4 * UNIT, 17 * UNIT, 1 * UNIT, 2 * UNIT)
        ctx.fillRect(4 * UNIT, 21 * UNIT, 1 * UNIT, 15 * UNIT)
        ctx.fillRect(5 * UNIT, 18 * UNIT, 1 * UNIT, 13 * UNIT)
        ctx.fillRect(6 * UNIT, 18 * UNIT, 1 * UNIT, 12 * UNIT)
        ctx.fillRect(7 * UNIT, 18 * UNIT, 1 * UNIT, 12 * UNIT)
        ctx.fillRect(8 * UNIT, 19 * UNIT, 1 * UNIT, 10 * UNIT)
        ctx.fillRect(9 * UNIT, 17 * UNIT, 1 * UNIT, 11 * UNIT)
        ctx.fillRect(10 * UNIT, 15 * UNIT, 1 * UNIT, 13 * UNIT)
        ctx.fillRect(10 * UNIT, 31 * UNIT, 1 * UNIT, 1 * UNIT)
        ctx.fillRect(11 * UNIT, 12 * UNIT, 1 * UNIT, 15 * UNIT)
        ctx.fillRect(11 * UNIT, 29 * UNIT, 1 * UNIT, 3 * UNIT)
        ctx.fillRect(12 * UNIT, 10 * UNIT, 1 * UNIT, 8 * UNIT)
        ctx.fillRect(12 * UNIT, 19 * UNIT, 1 * UNIT, 12 * UNIT)
        ctx.fillRect(13 * UNIT, 8 * UNIT, 1 * UNIT, 10 * UNIT)
        ctx.fillRect(13 * UNIT, 19 * UNIT, 1 * UNIT, 11 * UNIT)
        ctx.fillRect(14 * UNIT, 5 * UNIT, 1 * UNIT, 12 * UNIT)
        ctx.fillRect(14 * UNIT, 19 * UNIT, 1 * UNIT, 11 * UNIT)
        ctx.fillRect(15 * UNIT, 3 * UNIT, 1 * UNIT, 13 * UNIT)
        ctx.fillRect(15 * UNIT, 19 * UNIT, 1 * UNIT, 10 * UNIT)
        ctx.fillRect(16 * UNIT, 1 * UNIT, 1 * UNIT, 14 * UNIT)
        ctx.fillRect(16 * UNIT, 19 * UNIT, 1 * UNIT, 9 * UNIT)
        ctx.fillRect(17 * UNIT, 0 * UNIT, 1 * UNIT, 14 * UNIT)
        ctx.fillRect(17 * UNIT, 19 * UNIT, 1 * UNIT, 8 * UNIT)
        ctx.fillRect(18 * UNIT, 1 * UNIT, 1 * UNIT, 11 * UNIT)
        ctx.fillRect(18 * UNIT, 19 * UNIT, 1 * UNIT, 8 * UNIT)
        ctx.fillRect(19 * UNIT, 19 * UNIT, 1 * UNIT, 9 * UNIT)
        ctx.fillRect(19 * UNIT, 38 * UNIT, 1 * UNIT, 1 * UNIT)
        ctx.fillRect(20 * UNIT, 20 * UNIT, 1 * UNIT, 10 * UNIT)
        ctx.fillRect(20 * UNIT, 37 * UNIT, 1 * UNIT, 2 * UNIT)
        ctx.fillRect(21 * UNIT, 20 * UNIT, 1 * UNIT, 19 * UNIT)
        ctx.fillRect(22 * UNIT, 20 * UNIT, 1 * UNIT, 19 * UNIT)
        ctx.fillRect(23 * UNIT, 19 * UNIT, 1 * UNIT, 19 * UNIT)
        ctx.fillRect(24 * UNIT, 18 * UNIT, 1 * UNIT, 20 * UNIT)
        ctx.fillRect(25 * UNIT, 17 * UNIT, 1 * UNIT, 4 * UNIT)
        ctx.fillRect(25 * UNIT, 23 * UNIT, 1 * UNIT, 13 * UNIT)
        ctx.fillRect(25 * UNIT, 37 * UNIT, 1 * UNIT, 1 * UNIT)
        ctx.fillRect(26 * UNIT, 16 * UNIT, 1 * UNIT, 5 * UNIT)
        ctx.fillRect(26 * UNIT, 24 * UNIT, 1 * UNIT, 11 * UNIT)
        ctx.fillRect(27 * UNIT, 15 * UNIT, 1 * UNIT, 6 * UNIT)
        ctx.fillRect(27 * UNIT, 25 * UNIT, 1 * UNIT, 8 * UNIT)
        ctx.fillRect(28 * UNIT, 14 * UNIT, 1 * UNIT, 6 * UNIT)
        ctx.fillRect(29 * UNIT, 13 * UNIT, 1 * UNIT, 7 * UNIT)
        ctx.fillRect(30 * UNIT, 12 * UNIT, 1 * UNIT, 8 * UNIT)
        ctx.fillRect(31 * UNIT, 11 * UNIT, 1 * UNIT, 8 * UNIT)
        ctx.fillRect(32 * UNIT, 10 * UNIT, 1 * UNIT, 9 * UNIT)
        ctx.fillRect(33 * UNIT, 9 * UNIT, 1 * UNIT, 10 * UNIT)
        ctx.fillRect(34 * UNIT, 8 * UNIT, 1 * UNIT, 10 * UNIT)
        ctx.fillRect(35 * UNIT, 7 * UNIT, 1 * UNIT, 10 * UNIT)
        ctx.fillRect(36 * UNIT, 6 * UNIT, 1 * UNIT, 10 * UNIT)
        ctx.fillRect(37 * UNIT, 5 * UNIT, 1 * UNIT, 8 * UNIT)
        ctx.fillRect(38 * UNIT, 4 * UNIT, 1 * UNIT, 6 * UNIT)
    }
    ctx.restore();
}