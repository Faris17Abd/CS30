// Noisy Numbers
// Fares Abdalla
// March 7 2024
//A look at randomness

let segmentLength = 20;
let bally = 200; 
let balltime = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function segmentLine(){
  strokeWeight(15);
  let greyTime = 0;
  let x = 0;
  while(x < width){
    let greyValue = random(0,255);
    greyValue = noise(greyTime);
    greyValue = map(greyValue, 0, 1, 0, 255);
    greyTime += 100;

    stroke(greyValue)
    line(x, height/2, x+segmentLength, height/2);
    x += segmentLength
  }
}

function moveball(){
  strokeWeight(1); stroke(0);
  ySpeed = random(-20,20);

  ySpeed = noise(balltime);
  ySpeed = map(ySpeed, 0 ,1, -20, 20);
  balltime += 0.01;

  bally += ySpeed;
  circle(width*0.7, bally, 30);
}


function draw() {
  background(220);
  segmentLine();
  moveball();  
}
