let numberShapes = 50; 

function setup() {
  createCanvas(windowWidth, windowHeight); //Creating the canvas to the size of the window
  noLoop(); //Stopping the draw function so the rectangles are static - reference p5.js website
  noStroke();
}

function draw() {
  background(255); //Setting the background to white
  
  //Calling the function drawShapes to draw multiple rectangles 
  drawBlueShapes();
  drawYellowShapes();
  drawGreyShapes();
    
}

function drawBlueShapes() {
  for (let i = 0; i < numberShapes; i++) {
    fill(0, 0, 240);
    let x = random(width);
    let y = random(height);
    let rectSize = random(width * 0.5, width * 0.5); 
    rect(x, y, rectSize, rectSize);
  }
}

function drawYellowShapes() {
  for (let i = 0; i < numberShapes; i++) {
    fill(237, 222, 0);
    let x = random(width);
    let y = random(height);
    let rectSize = random(width * 0.5, width * 0.5); 
    rect(x, y, rectSize, rectSize);
    
  }
}
function drawGreyShapes() {
  for (let i = 0; i < 100; i++) {
    fill(210);
    let x = random(width);
    let y = random(height);
    let rectSize = random(width * 0.05, width * 0.05); 
    rect(x, y, rectSize, rectSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); //Responsive design to calculate the size of the canvas based on the window dimensions

}
