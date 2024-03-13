// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

x = 0
y = 0
squaresize = 50

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  squareback();
  mouseClicked();
}

function mouseClicked(){
  if(mouseButton === LEFT && mouseIsPressed){
    if(squaresize < 10){
      squaresize -= 0;
    }else {
      squaresize -= 1;
    }
    if(mouseButton === RIGHT && mouseIsPressed){
      if(squaresize > 200){
        squaresize -= 0;
      }else {
        squaresize += 1;
      }
}
  }
}
function squareback(){
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