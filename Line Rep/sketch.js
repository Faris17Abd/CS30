// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
   // for now
  background(220);
  angleMode(DEGREES);
}

function randomElement(currentLen){
  //create one irregular line using
  //rotate transfortmations
  push(); //isolate the coordinate transfer
  while(currentLen > 5){
    rotate(random(-40,40));
    line(0,0,0, currentLen);
    translate(0,currentLen);s
    currentLen *= 0.75;
  }


  pop();
}

function draw() {
  translate(width/2,height/2);
  for(let i = 0; i < 500; i++){
    randomElement(70);
  }
  
}
