// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let period = 0.1;
let peak = 110;
let spacesBetween = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleModes(DEGREES);
  drawSinewaves();
}


function drawingtheSinsiods(){
  // This function loops so that the there will be spaces between each line
  for(let i = 100; i >= 0; i--){
    period - 0.1;
    peak += 4;
    trough += 4;
  }
}

function drawSinewaves(){
  // This function draws the sinwaves
  for(let x = 0; x < width; x++){
    let y = sin(x * period * 0.8);
    y = map(y, -1, 1, peak, spacesBetween);
    if(x > width/8 && x < width * 0.88){
      point(x,y);
      period += 0.0046;
    }
  }
}