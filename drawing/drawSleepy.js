function drawSleepy() {
    drawOutline();
    drawLightGreen();
    drawDarkGreen();
    drawSkin();
    drawMouth();
    drawBlue();
    drawWhite();
    drawEyes();
}

function drawOutline() {
    ctx.fillStyle = "black"; // Black
    ctx.fillRect(13 * UNIT, 0 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 3 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 1 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 9 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 15 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 16 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 17 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 19 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 22 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(0 * UNIT, 24 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 27 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 28 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 29 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 30 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 31 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 30 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 28 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 29 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 30 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 28 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 30 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 27 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(27 * UNIT, 27 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(29 * UNIT, 26 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(30 * UNIT, 27 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 26 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 25 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 26 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 25 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 26 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 27 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 24 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 24 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 22 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(26 * UNIT, 21 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 22 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 21 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 20 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 18 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 16 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 14 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 12 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 5 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(13 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 11 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(14 * UNIT, 14 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 15 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(17 * UNIT, 16 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 17 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 16 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 11 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(19 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(18 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(23 * UNIT, 9 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(24 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(25 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 8 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(26 * UNIT, 11 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(30 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(26 * UNIT, 14 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 15* UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(24 * UNIT, 19 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(22 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawLightGreen() {
    ctx.fillStyle = "#B4E7D4"; // Light green
    ctx.fillRect(13 * UNIT, 1 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 4 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 5 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 5 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 6 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 6 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 9 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(6 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 7 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(11 * UNIT, 7 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(12 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(15 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(16 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(17 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(17* UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(18* UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19* UNIT, 12 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(20 * UNIT, 11 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(21 * UNIT, 7 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(22 * UNIT, 9 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(21 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 15 * UNIT, 2 * UNIT, 1 * UNIT);
}

function drawDarkGreen() {
    ctx.fillStyle = "#79eecc"; // Dark green
    ctx.fillRect(22 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 18 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 19 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 20 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 21 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 22 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 23 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 28 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 29 * UNIT, 3 * UNIT, 1 * UNIT);

}

function drawSkin() {
    ctx.fillStyle = "#FCE9CB"; // Skin color
    ctx.fillRect(5 * UNIT, 17 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 18 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 15 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 12 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(8 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 13 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 12 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 11 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 14 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 15 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 16 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 16 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 16 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 17 * UNIT, 3 * UNIT, 1 * UNIT);
}

function drawMouth() {
    ctx.fillStyle = "#F0B1BA"; // Darker skin
    ctx.fillRect(10 * UNIT, 17 * UNIT, 3 * UNIT, 1 * UNIT);

}

function drawBlue() {
    ctx.fillStyle = "#90D4FA"; // Light blue
    ctx.fillRect(7 * UNIT, 19 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 20 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 20 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 21 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 21 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 22 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 22 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 23 * UNIT, 22 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 24 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(4 * UNIT, 24 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 24 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 25 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 25 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 25 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 26 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 27 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 9 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(25 * UNIT, 7 * UNIT, 1 * UNIT, 15 * UNIT);
    ctx.fillRect(26 * UNIT, 8 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(26 * UNIT, 12 * UNIT, 4 * UNIT, 2 * UNIT);
}

function drawWhite() {
    ctx.fillStyle = "white"; // White
    ctx.fillRect(5 * UNIT,26 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 26 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 27 * UNIT, 17 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 28 * UNIT, 16 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 29 * UNIT, 13 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 30 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 28 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(29 * UNIT, 27 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(19 * UNIT, 17 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 18 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 19 * UNIT, 2 * UNIT, 1 * UNIT);
}

function drawEyes() {
    ctx.fillStyle = "#5BB4EA"; // Darker blue
    ctx.fillRect(3 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
}