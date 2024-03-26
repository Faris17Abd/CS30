// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 50, rectHeight = 10;
let colors = ["#6F1A00", "#A2520B", "#000000", "#031275", "#C77432"]
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1);
  drawHSB(width*0.2);
  drawCustom(width*0.3);
}

function drawRGB(x) {
  // draw a stack of rectangle 
  colorMode(RGB)
  for(let y = 0; y < height; y += rectHeight){
    fill(random(255),random(255), random(255));
    rect(x,y,rectWidth,rectHeight);
  }
}

function drawHSB(x) {
  // draw a stack of rectangle 
  colorMode(HSB)
  for(let y = 0; y < height; y += rectHeight){
    let hue = map(y,0,height,0,360)
    fill(hue, 360, 360);
    rect(x,y,rectWidth,rectHeight);
  }
}

function drawCustom(x) {
  // draw a stack of rectangle 
  colorMode(RGB)
  let index = 0
  for(let y = 0; y < height; y += rectHeight){
    fill(colors[index % 5]);
    // fill(colors[3]);
    rect(x,y,rectWidth,rectHeight);
    index++;
  }
}