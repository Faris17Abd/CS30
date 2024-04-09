// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myWalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myWalker = new Walker(width/2, height/2, color("red"));
}

function draw() {
  background(220)
  myWalker.move();
  myWalker.display();
}

class Walker{
  constructor(x,y,c){
    this.x = x;   this.y = y;   this.c = c;
    this.speed = random(2,10);
    this.size = 5;
  }
  display(){
    rectMode(CENTER);
    fill(this.c);
    square(this.x, this.y, this.size);
  }
  move(){
    let choice = Math.floor(random(4));
    if(choice===0) this.x -= this.speed;
    else if(choice === 1) this.x += this.speed;
    else if(choice === 2) this.y -= this.speed;
    else if(choice === 3) this.y += this.speed;
  }
}