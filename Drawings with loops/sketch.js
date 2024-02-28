// Drawing with Loops 1
// Fares Abdlla
// February 27, 2024
// Using Loops + Arrays to create some visualizations


let xPos, yPos;   

function setup() {
  createCanvas(400 , 400);
  xPos = [];  yPos = [];
  initWithLoops();
}

function initWithLoops(){
  //lay down some initial circles, but using loops to do so.
  for(let x = 10; x<width; x+=20){
    xPos.push(x); 
    yPos.push(height/2);
  }
}

function draw() {
  background(220);
  cornersAndMouseLoop();
}

//function mousePressed(){
  //this calls automatically on a mousePress
  //xPos.push(mouseX);
  //yPos.push(mouseY);
//}

function cornersAndMouseLoop(){
  // a hopefully slightly more elegant version
  let i = 0;
  while(i < xPos.length){
    let x = xPos[i];
    let y = yPos[i];
    circle(x,y,20);
    line(x,y,mouseX,mouseY);
    i++; 
  }
  circle(mouseX, mouseY, 20);
}

function cornersAndMouse(){
  // draw some circles near each of the four corners
  // and connect some lines from there to the mouse position
  fill(255);
  circle(width*0.05, height*0.05, 20);
  circle(width*0.95, height*0.05, 20);
  circle(width*0.05, height*0.95, 20);
  circle(width*0.95, height*0.95, 20);
  circle(mouseX, mouseY, 20);
  //lines
  line(width*0.05, height*0.05, mouseX,mouseY);
  line(width*0.95, height*0.05,  mouseX,mouseY);
  line(width*0.05, height*0.95,  mouseX,mouseY);
  line(width*0.95, height*0.95,  mouseX,mouseY);
}