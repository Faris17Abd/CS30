// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = []; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 10; i++){
    objects.push(new animtedObject(random(width), random(height)));
    objects.push(new circleobj(random(width), random(height)));
    objects.push(new Lineobj());
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}


class animtedObject{
  constructor(x,y){
    this.x =x; this.y= y;
    this.size= 1;
  }
  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

  display(){
    strokeWeight(4);
    point(this.x,this.y);
  }
}

class circleobj extends animtedObject{
  constructor(x,y){
    super(x,y);
    this.size = random(20,40);
  }
  display(){
    strokeWeight(2);
    if(dist(this.x, this.y, mouseX, mouseY)<this.size/2){
      fill(255,0,0);
    }
    else fill(255)
    circle(this.x,this.y,this.size);
  }
}

class Lineobj extends animtedObject{
  constructor(){
    super(random(width), random(height));

  }
  move(){
    super.move();
    this.x -= 5;
    if(this.x < 0) this.x = width;
  }
  display(){
    if(mouseIsPressed) strokeWeight(10);
    else strokeWeight(2);
    line(this.x, this.y, this.x+15, this.y);
  }
}