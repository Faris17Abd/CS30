// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

x = 0
y = 0
squaresize = 20
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  squareback();
}

function squareback(){
  if(mouseButton === LEFT && mouseIsPressed){
    if(squaresize === 15){
      squaresize = 15;
    }else {
      squaresize -= 1;
    }
  }
  for(let x = 0; x < width; x += squaresize){
    for(let y = 0; y < height; y += squaresize){
      let redV = random(0,255);
      let greenV = random(0,255);
      let blueV = random(0,255);
      fill(redV, greenV, blueV);
      square(x,y,squaresize);
      
    }
  }
}