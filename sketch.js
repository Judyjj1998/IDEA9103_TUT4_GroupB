let numberShapes = 50; 

function setup() {
  createCanvas(windowWidth, windowHeight); //Creating the canvas to the size of the window
  noLoop(); //Stopping the draw function so the rectangles are static - reference p5.js website

}

function draw() {
  background(255); //Setting the background to white
  //Calling the function drawShapes to draw multiple rectangles 
  drawShapes();
    
}

function drawShapes() {
  for (let i = 0; i < numberShapes; i++) {
    fill(255, 255, 255);
    let x = random(width);
    let y = random(height);
    let rectSize = random(10, 50); 
    rect(x, y, rectSize, rectSize);
  }
}
