// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function spawnBall(initialX, initialY){
  let ball = {
    x: initialX,
    y: initialY,
    radius: 30,
    xspeed: random(-5,5),
    yspeed: random(-5,5),
  };
  ballArray.push(ball)
}

function mousePressed(){
  spawnBall(mouseX, mouseY);
}

function draw() {
  background(220);
  for(let b of ballArray){
    fill(230,30,142)
    b.x += b.xspeed
    b.y += b.yspeed
    circle(b.x,b.y,b.radius)
  }
}
