// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR; 
let pinImages = [];
let currentindex = 0 ;

function preload(){
  lionL = loadImage("lion-left.png");
  lionR = loadImage("lion-right.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  for(let i = 0; i <9; i++){
  pinImages.push(loadImage("pin-0" + i + ".png"))
  }
}

function draw() {
  background(220);
  image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  image(pinImages[currentindex%9], width/2,height/2);
  currentindex ++;
  
}
