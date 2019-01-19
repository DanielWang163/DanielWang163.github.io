function drawCharacter() {
    drawBackground();
    drawHat();
    drawHead();
    drawLeftarm();
    drawClothe();
    drawRightarm();
    drawLegs();
    drawLantern();
    drawStick();
}

function drawBackground() {
    ctx.fillStyle = "#323232"
    ctx.fillRect(0 * unit, 0 * unit, 1000 * unit, 1000 * unit);
}

function drawHat() {
    ctx.fillStyle = "#0F1922";
    ctx.fillRect(50 * unit, 40 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(60 * unit, 30 * unit, 10 * unit, 40 * unit);
    ctx.fillRect(70 * unit, 60 * unit, 10 * unit, 40 * unit);
    ctx.fillRect(80 * unit, 80 * unit, 10 * unit, 40 * unit);
    ctx.fillRect(90 * unit, 100 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#1E3547";
    ctx.fillRect(70 * unit, 20 * unit, 10 * unit, 40 * unit);
    ctx.fillRect(80 * unit, 20 * unit, 10 * unit, 60 * unit);
    ctx.fillRect(90 * unit, 10 * unit, 10 * unit, 90 * unit);
    ctx.fillRect(100 * unit, 10 * unit, 10 * unit, 120 * unit);
    ctx.fillRect(110 * unit, 10 * unit, 10 * unit, 120 * unit);
    ctx.fillRect(120 * unit, 10 * unit, 10 * unit, 110 * unit);
    ctx.fillRect(130 * unit, 10 * unit, 10 * unit, 110 * unit);
    ctx.fillRect(140 * unit, 10 * unit, 10 * unit, 110 * unit);
    ctx.fillRect(150 * unit, 10 * unit, 10 * unit, 110 * unit);
    ctx.fillRect(90 * unit, 110 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(70 * unit, 120 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(50 * unit, 130 * unit, 40 * unit, 10 * unit);
    ctx.fillRect(30 * unit, 140 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(160 * unit, 40 * unit, 10 * unit, 60 * unit);
    ctx.fillRect(170 * unit, 60 * unit, 10 * unit, 40 * unit);
    ctx.fillRect(180 * unit, 80 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#355C7C";
    ctx.fillRect(120 * unit, 0 * unit, 40 * unit, 10 * unit);
    ctx.fillRect(160 * unit, 10 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(170 * unit, 40 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(180 * unit, 60 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(160 * unit, 100 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(180 * unit, 90 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(190 * unit, 80 * unit, 30 * unit, 10 * unit);
    ctx.fillRect(210 * unit, 70 * unit, 30 * unit, 10 * unit);
    ctx.fillRect(240 * unit, 60 * unit, 10 * unit, 10 * unit);
}

function drawHead() {
    ctx.fillStyle = "black";
    ctx.fillRect(80 * unit, 140 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(90 * unit, 130 * unit, 10 * unit, 40 * unit);
    ctx.fillRect(100 * unit, 130 * unit, 10 * unit, 50 * unit);
    ctx.fillRect(110 * unit, 130 * unit, 10 * unit, 50 * unit);
    ctx.fillRect(120 * unit, 120 * unit, 10 * unit, 70 * unit);
    ctx.fillRect(130 * unit, 120 * unit, 10 * unit, 80 * unit);
    ctx.fillRect(140 * unit, 120 * unit, 10 * unit, 70 * unit);
    ctx.fillRect(150 * unit, 120 * unit, 10 * unit, 60 * unit);
    ctx.fillRect(160 * unit, 110 * unit, 10 * unit, 60 * unit);
    ctx.fillRect(170 * unit, 110 * unit, 10 * unit, 60 * unit);
    ctx.fillRect(180 * unit, 100 * unit, 10 * unit, 60 * unit);
    ctx.fillRect(190 * unit, 120 * unit, 10 * unit, 30 * unit);
    ctx.fillStyle = "white";
    ctx.fillRect(100 * unit, 140 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(150 * unit, 130 * unit, 10 * unit, 10 * unit);
}

function drawLeftarm() {
    ctx.fillStyle = "black";
    ctx.fillRect(0 * unit, 260 * unit, 40 * unit, 10 * unit);
    ctx.fillRect(0 * unit, 270 * unit, 40 * unit, 10 * unit);
    ctx.fillRect(0 * unit, 280 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(20 * unit, 280 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#B8B8B8";
    ctx.fillRect(40 * unit, 250 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(50 * unit, 240 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(60 * unit, 230 * unit, 30 * unit, 10 * unit);
    ctx.fillRect(70 * unit, 220 * unit, 30 * unit, 10 * unit);
    ctx.fillRect(80 * unit, 210 * unit, 20 * unit, 10 * unit);
    ctx.fillStyle = "#687980"
    ctx.fillRect(40 * unit, 260 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(50 * unit, 250 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(70 * unit, 240 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(90 * unit, 230 * unit, 10 * unit, 10 * unit);
}

function drawClothe() {
    ctx.fillStyle = "#0F1922";
    ctx.fillRect(70 * unit, 160 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(80 * unit, 170 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(90 * unit, 180 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(100 * unit, 200 * unit, 10 * unit, 100 * unit);
    ctx.fillRect(110 * unit, 230 * unit, 10 * unit, 50 * unit);
    ctx.fillRect(90 * unit, 240 * unit, 10 * unit, 80 * unit);
    ctx.fillRect(80 * unit, 260 * unit, 10 * unit, 80 * unit);
    ctx.fillRect(70 * unit, 300 * unit, 10 * unit, 50 * unit);
    ctx.fillRect(60 * unit, 320 * unit, 10 * unit, 50 * unit);
    ctx.fillRect(50 * unit, 360 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(90 * unit, 340 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(80 * unit, 350 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#1E3547";
    ctx.fillRect(90 * unit, 170 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(100 * unit, 180 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(110 * unit, 200 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(120 * unit, 230 * unit, 10 * unit, 40 * unit);
    ctx.fillRect(110 * unit, 280 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(100 * unit, 300 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(90 * unit, 320 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(80 * unit, 340 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(70 * unit, 350 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(60 * unit, 370 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(70 * unit, 390 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#687980";
    ctx.fillRect(110 * unit, 180 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(120 * unit, 200 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(120 * unit, 270 * unit, 10 * unit, 30 * unit);
    ctx.fillStyle = "#B8B8B8";
    ctx.fillRect(120 * unit, 190 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(130 * unit, 200 * unit, 10 * unit, 100 * unit);
    ctx.fillRect(140 * unit, 190 * unit, 10 * unit, 110 * unit);
    ctx.fillRect(150 * unit, 240 * unit, 10 * unit, 60 * unit);
    ctx.fillRect(160 * unit, 290 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#687980";
    ctx.fillRect(150 * unit, 180 * unit, 20 * unit, 60 * unit);
    ctx.fillRect(160 * unit, 230 * unit, 20 * unit, 60 * unit);
    ctx.fillRect(170 * unit, 280 * unit, 20 * unit, 10 * unit);
    ctx.fillStyle = "#1E3547";
    ctx.fillRect(160 * unit, 170 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(170 * unit, 170 * unit, 10 * unit, 60 * unit);
    ctx.fillRect(180 * unit, 160 * unit, 10 * unit, 120 * unit);
    ctx.fillRect(190 * unit, 200 * unit, 10 * unit, 100 * unit);
    ctx.fillRect(190 * unit, 150 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(200 * unit, 270 * unit, 10 * unit, 50 * unit);
    ctx.fillRect(210 * unit, 310 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(220 * unit, 320 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(230 * unit, 340 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(200 * unit, 120 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(210 * unit, 130 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(230 * unit, 120 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#355C7C";
    ctx.fillRect(230 * unit, 130 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(210 * unit, 140 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(200 * unit, 150 * unit, 30 * unit, 10 * unit);
    ctx.fillRect(190 * unit, 160 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(190 * unit, 170 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(220 * unit, 150 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(230 * unit, 180 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(200 * unit, 200 * unit, 10 * unit, 70 * unit);
    ctx.fillRect(210 * unit, 210 * unit, 10 * unit, 100 * unit);
    ctx.fillRect(220 * unit, 220 * unit, 10 * unit, 100 * unit);
    ctx.fillRect(230 * unit, 230 * unit, 10 * unit, 110 * unit);
    ctx.fillRect(240 * unit, 250 * unit, 10 * unit, 120 * unit);
    ctx.fillRect(250 * unit, 270 * unit, 10 * unit, 120 * unit);
    ctx.fillRect(260 * unit, 290 * unit, 10 * unit, 100 * unit);
    ctx.fillRect(270 * unit, 340 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(240 * unit, 390 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#1E3547";
    ctx.fillRect(240 * unit, 310 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(250 * unit, 290 * unit, 10 * unit, 20 * unit);
}

function drawRightarm() {
    ctx.fillStyle = "#B8B8B8";
    ctx.fillRect(200 * unit, 170 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(210 * unit, 160 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(220 * unit, 180 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(230 * unit, 190 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(240 * unit, 200 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(250 * unit, 220 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(260 * unit, 230 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(270 * unit, 240 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#687980";
    ctx.fillRect(190 * unit, 180 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(200 * unit, 190 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(210 * unit, 200 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(220 * unit, 210 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(230 * unit, 220 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(250 * unit, 230 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(260 * unit, 240 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "black";
    ctx.fillRect(280 * unit, 230 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(290 * unit, 200 * unit, 30 * unit, 30 * unit);
}

function drawLegs() {
    ctx.fillStyle = "#330504";
    ctx.fillRect(170 * unit, 290 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(110 * unit, 300 * unit, 90 * unit, 10 * unit);
    ctx.fillStyle = "#5C250F";
    ctx.fillRect(110 * unit, 310 * unit, 90 * unit, 10 * unit);
    ctx.fillRect(100 * unit, 320 * unit, 110 * unit, 10 * unit);
    ctx.fillStyle = "#330504";
    ctx.fillRect(100 * unit, 330 * unit, 120 * unit, 10 * unit);
    ctx.fillRect(100 * unit, 340 * unit, 120 * unit, 10 * unit);
    ctx.fillRect(110 * unit, 350 * unit, 40 * unit, 10 * unit);
    ctx.fillRect(180 * unit, 350 * unit, 40 * unit, 10 * unit);
    ctx.fillRect(120 * unit, 360 * unit, 20 * unit, 20 * unit);
    ctx.fillRect(130 * unit, 380 * unit, 20 * unit, 20 * unit);
    ctx.fillRect(190 * unit, 360 * unit, 20 * unit, 40 * unit);
    ctx.fillStyle = "#5A240E";
    ctx.fillRect(190 * unit, 400 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(200 * unit, 420 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(140 * unit, 400 * unit, 10 * unit, 30 * unit);
    ctx.fillRect(120 * unit, 420 * unit, 20 * unit, 10 * unit);
    ctx.fillStyle = "#F6B443";
    ctx.fillRect(130 * unit, 310 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(130 * unit, 320 * unit, 30 * unit, 10 * unit);
    ctx.fillStyle = "white";
    ctx.fillRect(150 * unit, 310 * unit, 10 * unit, 10 * unit);
    ctx.fillStyle = "#110101";
    ctx.fillRect(140 * unit, 340 * unit, 40 * unit, 10 * unit);
    ctx.fillRect(130 * unit, 350 * unit, 20 * unit, 10 * unit);
    ctx.fillRect(130 * unit, 360 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(140 * unit, 380 * unit, 10 * unit, 10 * unit);
}

function drawLantern() {
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(290 * unit, 230 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(320 * unit, 210 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(330 * unit, 220 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(330 * unit, 220 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(340 * unit, 230 * unit, 10 * unit, 20 * unit);
    ctx.fillRect(330 * unit, 250 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(300 * unit, 250 * unit, 10 * unit, 10 * unit);
    ctx.fillRect(310 * unit, 260 * unit, 20 * unit, 10 * unit);
    ctx.fillStyle = "black";
    ctx.fillRect(290 * unit, 270 * unit, 60 * unit, 10 * unit);  
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(280 * unit, 280 * unit, 80 * unit, 10 * unit); 
    ctx.fillRect(290 * unit, 290 * unit, 10 * unit, 30 * unit); 
    ctx.fillStyle = "#F6B443";
    ctx.fillRect(300 * unit, 290 * unit, 20 * unit, 30 * unit);
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(320 * unit, 290 * unit, 10 * unit, 30 * unit); 
    ctx.fillStyle = "#F6B443";
    ctx.fillRect(330 * unit, 290 * unit, 10 * unit, 30 * unit);
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(340 * unit, 290 * unit, 10 * unit, 30 * unit); 
    ctx.fillRect(300 * unit, 320 * unit, 40 * unit, 10 * unit); 
    ctx.fillStyle = "black";
    ctx.fillRect(300 * unit, 330 * unit, 40 * unit, 10 * unit); 
    ctx.fillStyle = "#1E1E1E";
    ctx.fillRect(290 * unit, 340 * unit, 60 * unit, 10 * unit); 
}

function drawStick() {
    ctx.fillStyle = "#5C250F";
    ctx.fillRect(10 * unit, 280 * unit, 10 * unit, 150 * unit);
}