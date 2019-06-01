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
    ctx.fillStyle = "#63D436";
    ctx.fillRect(0 * UNIT, 0 * UNIT, 20 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 2 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 2 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT);   
    ctx.fillStyle = "#50AD2A";
    ctx.fillRect(0 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 3 * UNIT, 20 * UNIT, 2 * UNIT); 
    ctx.fillRect(4 * UNIT, 5 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(12 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 5 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillStyle = "#469624";   
    ctx.fillRect(0 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);  
    ctx.fillRect(7 * UNIT, 5 * UNIT, 5 * UNIT, 1 * UNIT);  
    ctx.fillRect(13 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);  
    ctx.fillRect(19 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(0 * UNIT, 6 * UNIT, 5 * UNIT, 1 * UNIT);  
    ctx.fillRect(6 * UNIT, 6 * UNIT, 12 * UNIT, 1 * UNIT); 
    ctx.fillRect(19 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(0 * UNIT, 7 * UNIT, 20 * UNIT, 1 * UNIT); 
    ctx.fillRect(0 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT); 
    ctx.fillRect(1 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(5 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT); 
    ctx.fillRect(10 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT); 
    ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(15 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(14 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT); 
    ctx.fillRect(18 * UNIT, 8 * UNIT, 2 * UNIT, 2 * UNIT); 
    ctx.fillStyle = "#D68C36";  
    ctx.fillRect(3 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT); 
    ctx.fillRect(7 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT); 
    ctx.fillRect(13 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT); 
    ctx.fillRect(16 * UNIT, 8 * UNIT, 2 * UNIT, 2 * UNIT);  
    ctx.fillRect(0 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);   
    ctx.fillRect(3 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT); 
    ctx.fillRect(7 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT); 
    ctx.fillRect(10 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(12 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);  
    ctx.fillRect(0 * UNIT, 10 * UNIT, 9 * UNIT, 1 * UNIT);  
    ctx.fillRect(6 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT); 
    ctx.fillRect(11 * UNIT, 10 * UNIT, 9 * UNIT, 1 * UNIT); 
    ctx.fillRect(12 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT); 
    ctx.fillRect(16 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);  
    ctx.fillStyle = "#CC8533";  
    ctx.fillRect(9 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(9 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT); 
    ctx.fillRect(0 * UNIT, 11 * UNIT, 6 * UNIT, 1 * UNIT); 
    ctx.fillRect(9 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT);  
    ctx.fillRect(15 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);  
    ctx.fillRect(17 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT); 
    ctx.fillRect(0 * UNIT, 12 * UNIT, 20 * UNIT, 1 * UNIT); 
    ctx.fillRect(0 * UNIT, 13 * UNIT, 10 * UNIT, 1 * UNIT); 
    ctx.fillRect(11 * UNIT, 13 * UNIT, 4 * UNIT, 3 * UNIT); 
    ctx.fillRect(16 * UNIT, 13 * UNIT, 4 * UNIT, 1 * UNIT);  
    ctx.fillRect(17 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT); 
    ctx.fillRect(18 * UNIT, 15 * UNIT, 2 * UNIT, 1 * UNIT); 
    ctx.fillRect(0 * UNIT, 14 * UNIT, 2 * UNIT, 1 * UNIT);  
    ctx.fillRect(0 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT); 
    ctx.fillRect(4 * UNIT, 14 * UNIT, 6 * UNIT, 1 * UNIT); 
    ctx.fillRect(5 * UNIT, 15 * UNIT, 4 * UNIT, 1 * UNIT);   
    ctx.fillStyle = "#B8772D";  
    ctx.fillRect(2 * UNIT, 14 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 15 * UNIT, 4 * UNIT, 1 * UNIT);            
    ctx.fillRect(10 * UNIT, 13 * UNIT, 1 * UNIT, 3 * UNIT); 
    ctx.fillRect(9 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);     
    ctx.fillRect(15 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);   
    ctx.fillRect(15 * UNIT, 14 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 15 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 16 * UNIT, 20 * UNIT, 4 * UNIT);         
}     
