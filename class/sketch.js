// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mycircleone;
function setup() {
  createCanvas(windowWidth, windowHeight);
  mycircleone = new circleone(width/2, height/2, color("red"));
}

function draw() {
  background(220);
  mycircleone.display();
}

class circleone{
  constructor(x,y,c){
    this.x = x;   this.y = y;   this.c = c;
    this.speed = 10
    this.size = 5;
  }
  display(){
    rectMode(CENTER);
    fill(this.c);
    circle(this.x, this.y, this.size);
  }
  move(){
    for(x < windowWidth){
      this.x += this.speed;
    }
  }
}
