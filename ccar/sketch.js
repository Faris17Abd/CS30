// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  drawroad();
  background(220);
}

function draw() {
 
}

function drawroad(){
  fill(0)
  rect(0,height/2, width, 200);
  rect(0,height/2 - 200, width, 200);
  for (let i = 0; i < width; i++) {
    fill(255)
    rect(i*50, height/2 - 10, 30, 20);
  fill(135, 128, 128);
  rect(width,height,width, height)
}
}