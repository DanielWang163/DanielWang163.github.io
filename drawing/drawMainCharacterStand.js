function drawMainCharacterStand(x, y, scale) {
    ctx.save();
    ctx.translate(x*UNIT, y*UNIT);
    ctx.scale(scale, scale);
    drawMainCharacterStand1();
    // drawMainCharacterStand2();
    // drawMainCharacterStand3();
    // drawMainCharacterStand4();
    // drawMainCharacterStand5();
    // drawMainCharacterStand6();
    // drawMainCharacterStand7();
    // drawMainCharacterStand8();
    // drawMainCharacterStand9();
    // drawMainCharacterStand10();
    // drawMainCharacterStand11();
    // drawMainCharacterStand12();
    ctx.restore();
}
function drawMainCharacterStand1() {
    // Hair
    ctx.fillStyle = "#92C1F3"; // Lighter Blue
    ctx.fillRect(7 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 5 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#7299E1"; // Blue
    ctx.fillRect(7 * UNIT, 10 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 11 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 9 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 8 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 7 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(18 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 6 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 5 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 3 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 2 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 0 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 16 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#5B72CC"; // Darker Blue
    ctx.fillRect(17 * UNIT, 0 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 5 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(19 * UNIT, 8 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(15 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 12 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 13 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 16 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 17 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 16 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 18 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#6755A8"; // Light Purple
    ctx.fillRect(7 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 16 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 15 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 3 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 5 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(25 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(22 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 16 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 17 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 18 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 18 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    // Headphones
    ctx.fillStyle = "#6AF0E2"; // Lightest Blue
    ctx.fillRect(22 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#5CD2C8"; // A Tiny Darker Than Previous
    ctx.fillRect(23 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#A9B3C9"; // Light Grey
    ctx.fillRect(21 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 11 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(21 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6A8C96"; // Disgusting Green Thing
    ctx.fillRect(21 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#837DA8"; // Darker Purpleish Grey
    ctx.fillRect(22 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 15 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#403A66"; // Dark Purple
    ctx.fillRect(18 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 8 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(21 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#28343C"; // Blackish Grey
    ctx.fillRect(20 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(22 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    // Eyes
    ctx.fillStyle = "#FFFFFF"; // White
    ctx.fillRect(17 * UNIT, 14 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#DEDEDE"; // Grey
    ctx.fillRect(17 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#C3C3C3"; // Darker Grey
    ctx.fillRect(17 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#75BDE7"; // Light Blue
    ctx.fillRect(15 * UNIT, 15 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#5B72D6"; // A Little Darker Blue
    ctx.fillRect(15 * UNIT, 14 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#495290"; // Darker Blue
    ctx.fillRect(15 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#3A4172"; // Darkerr Blue
    ctx.fillRect(15 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#1E2454"; // Darkest Blue Outline
    ctx.fillRect(14 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#FEF2CC"; // Lightest Skin Color
    ctx.fillRect(12 * UNIT, 16 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 17 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#FBE0BD"; // Light Skin Color
    ctx.fillRect(12 * UNIT, 15 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 16 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 18 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 16 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#EDBBAA"; // Dark Skin Color
    ctx.fillRect(10 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(15 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(16 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#C38C8C"; // Darkest Skin Color
    ctx.fillRect(14 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#28343C";
    ctx.fillRect(17 * UNIT, 18 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#1B242A";
    ctx.fillRect(17 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 18 * UNIT, 1 * UNIT, 1 * UNIT);
    // Armor
    ctx.fillStyle = "#E5E5E5";
    ctx.fillRect(14 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#C4CEDE";
    ctx.fillRect(15 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 21 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(24 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 18 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(30 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#A9B3C9";
    ctx.fillRect(16 * UNIT, 19 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 21 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(17 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 22 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 21 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 20 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 19 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 18 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(31 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#9093B7";
    ctx.fillRect(15 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 21 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 19 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(21 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 21 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(29 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(31 * UNIT, 18 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(32 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#837DA8";
    ctx.fillRect(18 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 19 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(30 * UNIT, 19 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6AF0E2";
    ctx.fillRect(16 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#5CD2C8";
    ctx.fillRect(17 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#37434B";
    ctx.fillRect(16 * UNIT, 20 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#28343C";
    ctx.fillRect(18 * UNIT, 20 * UNIT, 1 * UNIT, 1 * UNIT);
    // Body
    ctx.fillStyle = "#C4CEDE";
    ctx.fillRect(15 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#A9B3C9";
    ctx.fillRect(16 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 30 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#55676C";
    ctx.fillRect(16 * UNIT, 28 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#9093B7";
    ctx.fillRect(18 * UNIT, 30 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6A8C96";
    ctx.fillRect(20 * UNIT, 30 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 29 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 26 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#596D88";
    ctx.fillRect(20 * UNIT, 31 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 30 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 28 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(23 * UNIT, 27 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 26 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#4B4E78";
    ctx.fillRect(23 * UNIT, 30 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 31 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 28 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 27 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#28343C";
    ctx.fillRect(14 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 25 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 26 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 27 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 28 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 29 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 28 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 27 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 22 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 22 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 25 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#1B242A";
    ctx.fillRect(18 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 23 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 24 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 25 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(22 * UNIT, 25 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(19 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 21 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 22 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 23 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 25 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#37434B";
    ctx.fillRect(15 * UNIT, 25 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 26 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 27 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 28 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 23 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#FEF2CC";
    ctx.fillRect(14 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 25 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#FBF4BD";
    ctx.fillRect(24 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#EDBBAA";
    ctx.fillRect(14 * UNIT, 25 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 26 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#C38C8C";
    ctx.fillRect(22 * UNIT, 24 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 23 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6AF0E2";
    ctx.fillRect(23 * UNIT, 28 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 30 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#5CD2C8";
    ctx.fillRect(24 * UNIT, 28 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#403A66";
    ctx.fillRect(24 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 31 * UNIT, 2 * UNIT, 1 * UNIT);
    // Legs
    ctx.fillStyle = "#28343C";
    ctx.fillRect(15 * UNIT, 30 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(16 * UNIT, 31 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 32 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#37434B";
    ctx.fillRect(14 * UNIT, 31 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 32 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#1B242A";
    ctx.fillRect(21 * UNIT, 32 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#4B4E78";
    ctx.fillRect(14 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 30 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 31 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 32 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 32 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 33 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 34 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 35 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(12 * UNIT, 38 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 39 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 41 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 42 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 43 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 44 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 44 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 45 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 46 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 33 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 34 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 35 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 36 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(24 * UNIT, 37 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 38 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(24 * UNIT, 40 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(29 * UNIT, 40 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 41 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(30 * UNIT, 41 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(30 * UNIT, 42 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(31 * UNIT, 43 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(30 * UNIT, 45 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 46 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#596D88";
    ctx.fillRect(13 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 30 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 31 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 33 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 34 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 35 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 38 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 42 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 44 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 45 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 33 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 34 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(21 * UNIT, 35 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 36 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(22 * UNIT, 37 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 41 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(29 * UNIT, 41 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 42 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(30 * UNIT, 43 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(29 * UNIT, 44 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 45 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6A8C96";
    ctx.fillRect(12 * UNIT, 29 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 32 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 33 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 34 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 35 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(10 * UNIT, 39 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(19 * UNIT, 34 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(20 * UNIT, 35 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(21 * UNIT, 36 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(22 * UNIT, 38 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(23 * UNIT, 40 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#55676C";
    ctx.fillRect(14 * UNIT, 30 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 31 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#FEF2CC";
    ctx.fillRect(11 * UNIT, 40 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 40 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#EDBBAA";
    ctx.fillRect(12 * UNIT, 40 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 40 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#C38C8C";
    ctx.fillRect(13 * UNIT, 40 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 39 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#403A66";
    ctx.fillRect(16 * UNIT, 34 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 35 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 37 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(13 * UNIT, 39 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 41 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 42 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 43 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 44 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 45 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 46 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(23 * UNIT, 33 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(25 * UNIT, 35 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 36 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 37 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(27 * UNIT, 39 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 40 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 41 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(29 * UNIT, 39 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(31 * UNIT, 40 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(31 * UNIT, 45 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 46 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6AF0E2";
    ctx.fillRect(8 * UNIT, 43 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 44 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(27 * UNIT, 43 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(26 * UNIT, 44 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#5CD2C8";
    ctx.fillRect(10 * UNIT, 44 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(28 * UNIT, 43 * UNIT, 2 * UNIT, 1 * UNIT);
    // Shadow
    ctx.fillStyle = "#9093B7";
    ctx.fillRect(0 * UNIT, 46 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 45 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 46 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(32 * UNIT, 45 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(31 * UNIT, 46 * UNIT, 12 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 47 * UNIT, 31 * UNIT, 1 * UNIT);
}