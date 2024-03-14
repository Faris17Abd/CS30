// Terrain 
// Fares Abdalla
// 03/11/2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectwidth = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  drawRectangles();
}

function draw() {
  
}

function drawRectangles(){
  let rectHeight;
  fill(0)
  for(let x = 0; x < width; x += rectwidth){
    // rectHeight = x;
    rectHeight = random(0, height*0.8);
    rect(x, height/2, rectwidth, rectHeight);
  }

}