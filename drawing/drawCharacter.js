function drawCharacter(x,y,scale) {
    ctx.save();
    ctx.translate(x,y);
    ctx.scale(scale,scale)
    drawHatOfCharacter();
    drawHeadOfCharacter();
    drawLeftarmOfCharacter();
    drawClotheOfCharacter();
    drawRightarmOfCharacter();
    drawLegsOfCharacter();
    drawLanternOfCharacter();
    drawStickOfCharacter();
    ctx.restore();
}

function drawHatOfCharacter() {
    ctx.fillStyle = "#0F1922";
    ctx.fillRect(5 * UNIT, 4 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 3 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(7 * UNIT, 6 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillStyle = "#1E3547";
    ctx.fillRect(7 * UNIT, 2 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(8 * UNIT, 2 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(9 * UNIT, 1 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(10 * UNIT, 1 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(11 * UNIT, 1 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(12 * UNIT, 1 * UNIT, 1 * UNIT, 11 * UNIT);
    ctx.fillRect(13 * UNIT, 1 * UNIT, 1 * UNIT, 11 * UNIT);
    ctx.fillRect(14 * UNIT, 1 * UNIT, 1 * UNIT, 11 * UNIT);
    ctx.fillRect(15 * UNIT, 1 * UNIT, 1 * UNIT, 11 * UNIT);
    ctx.fillRect(9 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 13 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 14 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 4 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(17 * UNIT, 6 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(18 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#355C7C";
    ctx.fillRect(12 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 1 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(17 * UNIT, 4 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(18 * UNIT, 6 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(16 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawHeadOfCharacter() {
    ctx.fillStyle = "black";
    ctx.fillRect(8 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 13 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(10 * UNIT, 13 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(11 * UNIT, 13 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(12 * UNIT, 12 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(13 * UNIT, 12 * UNIT, 1 * UNIT, 8 * UNIT);
    ctx.fillRect(14 * UNIT, 12 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(15 * UNIT, 12 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(16 * UNIT, 11 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(17 * UNIT, 11 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(18 * UNIT, 10 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(19 * UNIT, 12 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillStyle = "white";
    ctx.fillRect(10 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawLeftarmOfCharacter() {
    ctx.fillStyle = "black";
    ctx.fillRect(0 * UNIT, 26 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 27 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 28 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 28 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#B8B8B8";
    ctx.fillRect(4 * UNIT, 25 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 24 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 23 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 22 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 21 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#687980"
    ctx.fillRect(4 * UNIT, 26 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 25 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 24 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawClotheOfCharacter() {
    ctx.fillStyle = "#0F1922";
    ctx.fillRect(7 * UNIT, 16 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 17 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 18 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 20 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(11 * UNIT, 23 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(9 * UNIT, 24 * UNIT, 1 * UNIT, 8 * UNIT);
    ctx.fillRect(8 * UNIT, 26 * UNIT, 1 * UNIT, 8 * UNIT);
    ctx.fillRect(7 * UNIT, 30 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(6 * UNIT, 32 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(5 * UNIT, 36 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 34 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 35 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#1E3547";
    ctx.fillRect(9 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 18 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 20 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(12 * UNIT, 23 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(11 * UNIT, 28 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 30 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 32 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 34 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 35 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 37 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 39 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#687980";
    ctx.fillRect(11 * UNIT, 18 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 20 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(12 * UNIT, 27 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillStyle = "#B8B8B8";
    ctx.fillRect(12 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 20 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(14 * UNIT, 19 * UNIT, 1 * UNIT, 11 * UNIT);
    ctx.fillRect(15 * UNIT, 24 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(16 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#687980";
    ctx.fillRect(15 * UNIT, 18 * UNIT, 2 * UNIT, 6 * UNIT);
    ctx.fillRect(16 * UNIT, 23 * UNIT, 2 * UNIT, 6 * UNIT);
    ctx.fillRect(17 * UNIT, 28 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#1E3547";
    ctx.fillRect(16 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 17 * UNIT, 1 * UNIT, 6 * UNIT);
    ctx.fillRect(18 * UNIT, 16 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(19 * UNIT, 20 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(19 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 27 * UNIT, 1 * UNIT, 5 * UNIT);
    ctx.fillRect(21 * UNIT, 31 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(22 * UNIT, 32 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(23 * UNIT, 34 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(20 * UNIT, 12 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(21 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#355C7C";
    ctx.fillRect(23 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(21 * UNIT, 14 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 15 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 16 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 15 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(23 * UNIT, 18 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 20 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(21 * UNIT, 21 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(22 * UNIT, 22 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(23 * UNIT, 23 * UNIT, 1 * UNIT, 11 * UNIT);
    ctx.fillRect(24 * UNIT, 25 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(25 * UNIT, 27 * UNIT, 1 * UNIT, 12 * UNIT);
    ctx.fillRect(26 * UNIT, 29 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(27 * UNIT, 34 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(24 * UNIT, 39 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#1E3547";
    ctx.fillRect(24 * UNIT, 31 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 29 * UNIT, 1 * UNIT, 2 * UNIT);
}

function drawRightarmOfCharacter() {
    ctx.fillStyle = "#B8B8B8";
    ctx.fillRect(20 * UNIT, 17 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(21 * UNIT, 16 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(22 * UNIT, 18 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(23 * UNIT, 19 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(24 * UNIT, 20 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(25 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 23 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#687980";
    ctx.fillRect(19 * UNIT, 18 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(20 * UNIT, 19 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 20 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 21 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 22 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "black";
    ctx.fillRect(28 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(29 * UNIT, 20 * UNIT, 3 * UNIT, 3 * UNIT);
}

function drawLegsOfCharacter() {
    ctx.fillStyle = "#330504";
    ctx.fillRect(17 * UNIT, 29 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 30 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#5C250F";
    ctx.fillRect(11 * UNIT, 31 * UNIT, 9 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 32 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#330504";
    ctx.fillRect(10 * UNIT, 33 * UNIT, 12 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 34 * UNIT, 12 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 35 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 35 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 36 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(13 * UNIT, 38 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(19 * UNIT, 36 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillStyle = "#5A240E";
    ctx.fillRect(19 * UNIT, 40 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(20 * UNIT, 42 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 40 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(12 * UNIT, 42 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#F6B443";
    ctx.fillRect(13 * UNIT, 31 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 32 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "white";
    ctx.fillRect(15 * UNIT, 31 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#110101";
    ctx.fillRect(14 * UNIT, 34 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 35 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 36 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 38 * UNIT, 1 * UNIT, 1 * UNIT);
}

function drawLanternOfCharacter() {
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(29 * UNIT, 23 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(32 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(33 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(33 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(34 * UNIT, 23 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(33 * UNIT, 25 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(30 * UNIT, 25 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(31 * UNIT, 26 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "black";
    ctx.fillRect(29 * UNIT, 27 * UNIT, 6 * UNIT, 1 * UNIT);  
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(28 * UNIT, 28 * UNIT, 8 * UNIT, 1 * UNIT); 
    ctx.fillRect(29 * UNIT, 29 * UNIT, 1 * UNIT, 3 * UNIT); 
    ctx.fillStyle = "#F6B443";
    ctx.fillRect(30 * UNIT, 29 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(32 * UNIT, 29 * UNIT, 1 * UNIT, 3 * UNIT); 
    ctx.fillStyle = "#F6B443";
    ctx.fillRect(33 * UNIT, 29 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(34 * UNIT, 29 * UNIT, 1 * UNIT, 3 * UNIT); 
    ctx.fillRect(30 * UNIT, 32 * UNIT, 4 * UNIT, 1 * UNIT); 
    ctx.fillStyle = "black";
    ctx.fillRect(30 * UNIT, 33 * UNIT, 4 * UNIT, 1 * UNIT); 
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(29 * UNIT, 34 * UNIT, 6 * UNIT, 1 * UNIT); 
}

function drawStickOfCharacter() {
    ctx.fillStyle = "#5C250F";
    ctx.fillRect(1 * UNIT, 28 * UNIT, 1 * UNIT, 15 * UNIT);
}