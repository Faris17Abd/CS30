// Cars Cars Cars
// Fares Abdalla
// April 28th, 2024
// Cars driving like in real life

let car;
let trafficlight;
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  trafficlight = new Trafficlight();
  
  // populates the arrays
  for(let num_of_Vehicles = 40; num_of_Vehicles > 0; num_of_Vehicles--){
    let y = floor(random(0, 2));
    if( y===1) eastbound.push(new colon3(random(0, width), y));
    if (y===0) westbound.push(new colon3(random(0, width), y));
  }
  

}

function draw() {
  //  drawing the road, updating and displaying the vehicles'
  // actions, and managing the traffic light's behavior.
  drawroad();
  for (let car of eastbound) {
    car.actions_of_vehicle();
  }
  for (let car of westbound) {
    car.actions_of_vehicle();
  }

  
  trafficlight.action();
  trafficlight.display();
}


function drawroad(){

  fill(190)
  square(-1,-1,454545);

  noStroke();
  fill(0)
  rect(0,height/2 - 200, width, 200);
  rect(0,height/2 , width, 200);
  for (let i = 0; i < width; i++) {
    fill("yellow")
    rect(i*50, height/2 + 2, 30, 5);
}
}

function keyPressed(){
  // To stop the cars for a breif time
  if(keyCode===32) trafficlight.spacePressed();
}

function mouseClicked(){
  // Adds more cars
  if(mouseButton===LEFT && keyIsPressed && keyCode===SHIFT){
    eastbound.push(new colon3(random(0, width), 0));
  }
  else if(mouseButton===LEFT){
    westbound.push(new colon3(random(0, width), 1));
  }
}

class colon3{
  constructor(x,y){
    // Adds the needed coding for the class
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
    // Will display the vehicles
    noStroke();
    if(this.Type_of_vehicle === 1){
      this.car();
    }
    else{
      this.truck();
    }
  }
  car(){
    // car
    fill(this.colour_of_vehicle);
    rect(this.x, this.y, 30, 15);
    fill(200, 230, 255);
    rect(this.x + 19.3, this.y - 4, 10, 5);
    rect(this.x, this.y - 4, 10, 5);
    rect(this.x + 19.3, this.y  + 15, 10, 5);
    rect(this.x, this.y + 15, 10, 5);
  }

  truck(){
    // truck
    fill(this.colour_of_vehicle);
    rect(this.x, this.y, 30, 20);
    fill(200, 230, 255);
    rect(this.x + 20, this.y, 10, 19.5);
  }

  move(){
    // the movement of the cars
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
    // speeding up the cars
    if(this.speed_of_vehicle>15) this.speed_of_vehicle=15;
  }

  speed_down(){
    // aha get this, this coding will slow down the cars
    this.speed_of_vehicle -= 1;
    if(this.speed_of_vehicle) this.speed_of_vehicle = 15;
  }

  colour_change(){
    // oh and this, this will change the COLOURS of the car :3
    this.colour_of_vehicle = color(random(255), random(255), random(255));
    fill(this.colour_of_vehicle);
  }

  actions_of_vehicle(){
    // All the functions needed in order for the program to run
    // Certain function will have a 1% chance to run each frame
    this.display();
    if(!trafficlight.green) return;

    if(round(random(1,100))===1){
      this.speed_up();
    }
   
    if(round(random(1,100))===1){
      this.speed_down();
    }
    
    if(round(random(1,100))===1){
      this.colour_change();
    }
    
    this.move();
  }
}

class Trafficlight{
  constructor(){
    // Adds the needed for the coding for the class
    this.green = true;
    this.time_stop = 0;
  }

  display(){
    // Displays the traffic lights
    fill(209, 209, 224);
    strokeWeight(2);
    stroke("grey");
    rect(width/2, height/8, 40, 60);
    
    if(this.time_stop===0) fill(153, 255, 153);
    else fill(255, 102, 102);
    ellipse(width/2 + 20, height/6.4, 30);
  }

  action(){
    // This is a stop time action. spacePressed function
    // gives meaning to this coding
    // or is it the other way around?
    // or do they need each other?
    // or have I perhaps lost my mind writing this code?
    // Who knows, who knows.
    if(this.time_stop > 0){
      this.time_stop-=1;
      if(this.time_stop===0) this.green = true;
      return;
    }
  }

  spacePressed(){
    // It makes time_stop value = 120 and turns the light to red
    this.time_stop=120;
    this.green=false;
  }
}