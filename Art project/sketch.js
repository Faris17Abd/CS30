// Art Replication
// Fares Abdalla
// 21/04/2024
// “Ninety Parallel Sinusoids With Linearly Increasing Period”

let period = 0.1;
let peak = 110;
let TheBottom = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  drawSinewaves();
  drawingtheSinsiods();
  
}


function drawingtheSinsiods(){
  // The `drawSinusiods() function draws several sinusoidal waves 
  //with increasing amplitudes after repeatedly changing the peak and TheBottom values
  for(let i = 100; i >= 0; i--){
    period = 0.1;
    peak += 4;
    TheBottom += 4;
    drawSinewaves();
  }
}

function drawSinewaves(){
  // This function draws the sinwaves
  for(let x = 0; x < width; x++){
    let y = sin(x * period * 0.8);
    y = map(y, -1, 1, peak, TheBottom);
    if(x > width/8 && x < width * 0.88){
      point(x,y);
      period += 0.0046;
    }
  }
}