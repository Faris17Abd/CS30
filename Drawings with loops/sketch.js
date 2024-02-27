// Drawing wth loops 1
// Fares Abdalla
// 27/02/2024
// Using loops and arrays to create some visualizations
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let width = 400
let height = 300
let xPos, yPos;
function setup() {
  createCanvas(width, height);
}

function draw() {
  background(220);
  concersAndMouse();
}

function concersAndMouse(){
  //draw some circles near the four corners
  // and connect some lines from there to the mouse 
  circle(width*0.95, height*0.05, 30)
  circle(width*0.05, height*0.05, 30)
  circle(width*0.95, height*0.95, 30)
  circle(width*0.05,height*0.95, 30)
  circle(mouseX, mouseY, 10)
  line(width*0.05, height *0.05, mouseX, mouseY)
  line(width*0.95, height *0.05, mouseX, mouseY)
  line(width*0.05, height *0.95, mouseX, mouseY)
  line(width*0.95, height *0.95, mouseX, mouseY)
}