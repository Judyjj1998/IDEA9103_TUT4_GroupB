let numberShapes = 50; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //Stopping the draw function so the rectangles are static - reference p5.js website

}

function draw() {
  background(255); 
  //Need to fix so the rectangles dont move 
  drawShapes();
    // drawRect();
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

// function drawRect(){
//   rect(windowWidth/4, windowHeight/3, 50,30,0,0,237);
//   rect(windowWidth/2, windowHeight/6, 50,30,0,0,237);
// }