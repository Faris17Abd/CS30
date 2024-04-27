// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);

  drawroad();
  

}

function draw() {
  drawroad();
}


function drawroad(){

  fill(223);
  square(-1,-1,45454)

  // fill(135, 128, 128);
  // square(-1,-1,width)
  fill(0)
  rect(0,height/2, width, 200);
  rect(0,height/2 - 200, width, 200);
  for (let i = 0; i < width; i++) {
    fill(255)
    rect(i*50, height/2 - 10, 30, 20);
}
}

class colon3{
  constructor(x,y){
    this.x = x
    if(y === 1){
      this.y = random(height / 4, height / 2-20);
    }
    else{
      this.y = random(height / 2 + 5, height - height / 4 - 15);
    }
    this.direction_of_vehicle = y;
    this.speed_of_vehicle = 5
    this.colour_of_vehicle = color(random(255),random(255), random (255));
    this.Type_of_vehicle = Math.floor(random(0,2));
    this.The_World = 0;
  }  

  display(){
    noStroke();
    if(this.Type_of_vehicle === 1){
      this.car();
    }
    else{
      this.truck();
    }
  }
  car(){
    fill(this.color);
    rect(this.x, this.y, 30, 15);
    fill(200, 230, 255);
    rect(this.x + 19.3, this.y - 4, 10, 5);
    rect(this.x, this.y - 4, 10, 5);
    rect(this.x + 19.3, this.y  + 15, 10, 5);
    rect(this.x, this.y + 15, 10, 5);
  }

  truck(){
    fill(this.color);
    rect(this.x, this.y, 30, 20);
    fill(200, 230, 255);
    rect(this.x + 20, this.y, 10, 19.5);
  }

  move(){
    if(this.direction_of_vehicle === 1){
      this.x += this.speed_of_vehicle;
      if(this.x>width) this.x=0;
    }
    else if(this.direction_of_vehicle === 0){
      this.x -= this.speed_of_vehicle;
      if(this.x<0) this.x = width;
    }
  }

  speed_up(){
    this.speed_of_vehicle += 1;
    if(this.speed_of_vehicle>15) this.speed_of_vehicle=15;
  }

  speed_down(){
    this.speed_of_vehicle -= 1;
    if(this.speed_of_vehicle) this.speed_of_vehicle = 15;
  }

  colour_change(){
    this.colour_of_vehicle = color(random(255), random(255), random(255));
    fill(this.colour_of_vehicle);
  }

  
}