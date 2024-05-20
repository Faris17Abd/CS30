// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let music, bounceSound;
let started = false;
let pos; let vel;
let totalbounces = 0;
function preload(){
  music=loadSound("assets/background.mp3");
  bounceSound=loadSound("assets/bounceSound.wav");
}

function setup() {
  createCanvas(400, 300);
  pos = createVector(width/2, height/2);
  vel = createVector(5,3);
  textSize(30);
  textAlign(CENTER);
}

function draw() {
  background(220);
  if(started === false){
    text("Click to begin", width/2, height/2);
    if(mouseIsPressed){
    started = true;
    music.setVolume(0.3);
    music.loop();
  }
  }
  else{
    updateBall();
    text(totalbounces,width/2,height/2);
  }
}

function updateBall(){
  pos.add(vel);
  if(pos.x < 0 || pos.x > width){
    totalbounces++;
    bounceSound.play();
    vel *= -1;
  }
  if(pos.y < 0 || pos.y> height){
    totalbounces++;
    bounceSound.play();
    vel.y *= -1;
  }
  circle(pos.x, pos.y, 20);
}