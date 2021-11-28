function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    let startX = 40;
    let startY = 40;
    square(startY, startX, 300);
    // 300 / 9 == 33.3
    // The first row, we start the columns
    // We need to fit 9 squares.
    // The first one starts at (40, 40)
    // and ends at (73.3, 73.3)
    // So, the second (column) starts
    // at (73.3, 40)
    // For 9 squares. But we can't write it manually.
    // So, we need an equation for it. We need a pattern. Well, the pattern is, we take the previous square starting position and then add the side of the square, to know where the new square starts.
    
    
    let prevY = startX - 33.3;
    for(let col = 0; col < 9; col++){
      let currentY = prevY + 33.3;
      square(currentY, startX, 33.3);
      strokeWeight(5);
      line(startX + 300, startY, 300 + startX, 300 + startY);
      line(startX, startY, startX + 300, startY);
      line(startX, startY+300, startX + 300, startY+300);
      strokeWeight(1);
      
      if (col % 3 == 0) {
       let endY = currentY + 33.3;
       let endX = 300;
       strokeWeight(5);
       line(currentY, startX, currentY, startX + 300)
       // 9 squares * 33.3 will be our end point
       strokeWeight(1);
      
      }
      
         let prevX = startX;
      for(let row = 1; row < 9; row++){
        let currentX = prevX + 33.3;
        square(currentY, currentX, 33.3);
        prevX = currentX;
        
        if (row % 3 == 0) {
          let endY = currentY + 33.3;
          let endX = 300;
          strokeWeight(5);
          line(startY, currentX, startY + 300, currentX)
          strokeWeight(1); 
      }
      }
      prevY = currentY;
    }
  
  }