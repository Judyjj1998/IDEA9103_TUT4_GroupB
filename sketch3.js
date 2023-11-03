let xPos = [0, 0.124, 0.127]
let yPos = [0, 0.078, 0]

let widthRatio = [0.072, 0.208, 0.16]
let heightRatio = [0.464, 0.112, 0.096]

function setup(){
    createCanvas(windowWidth, windowHeight); //Creating the canvas to the size of the window
    noLoop();
    noStroke();
    
}

function draw(){
    background(255);
    drawYellowRectangle();
    // let yellowRectangle = new Rectangle(0.052, 0.032, 0.052, 0.388);
    // yellowRectangle.drawYellowRectangle();
    

}


// class Rectangle{
//     constructor(x, y, w, h, r, g, b){
//         this.xPos = x;
//         this.yPos = y;
//         this.width = w;
//         this.height = h;
//         // this.red = r;
//         // this.green = g;
//         // this.blue = b;
//     }

// }

 //Draw rectangles to scale
 function drawYellowRectangle(){
    fill(248, 196, 12)
    //rect(this.xPos * windowWidth, this.yPos * windowHeight, this.width * windowWidth, this.height * windowHeight);
    
    for (let i = 0; i < xPos.length; i++){
        rect(xPos[i] * windowWidth, yPos[i] * windowHeight, widthRatio[i] * windowWidth, heightRatio[i] * windowHeight)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
