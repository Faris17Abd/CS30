// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myplanet; 
let mymoon;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myplanet = new planet(width/2, height/2);
  mymoon = new moon()
  angleMode(DEGREES); 
}

function draw() {
  background(70);
  myplanet.display();
  mymoon.display();
}
function mouseClicked(){
  if(keyIsPressed && keyCode === SHIFT){
    myplanet = new planet(mouseX,mouseY);
  }
  else{
  myplanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myplanet.relocate(mouseX, mouseY);
  }
}

class planet{
  constructor(x,y){
    this.x= x; this.y= y; this.s = 100;
    this.moons = [];
  }
  createMoon(){
    this.moons.push(new moon(this.x,this.y));
  }
  display(){
    circle(this.x,this.y,this.s);
  }
}


class moon{
  constructor(x,y){
    this.x = x; this.y = y; this.speed = 2;
    this.angle = 0; this.orbitRadius = 80; this.s = 25;
  }
  update(){
    this.move();
    this.display();
  }
  move(){
    this.angle += this.speed;
  }
  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius,0,this.s); 
    pop();
  }
}