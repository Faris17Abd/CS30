// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grindSpacing = 20

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawLines();
}

function diagonalAsc(x,y,s){
  line(x - s/2, y + s/2, x + s/2, y - s/2);
}

function diagonalDesc(x,y,s){
  line(x + s/2, y + s/2, x - s/2, y - s/2);
}
function drawLines(){
  for(let x=0; x<width; x+=grindSpacing){
    for(let y=0; y<height; y+=grindSpacing){
      let choice = int(random(2));
      if(choice===0){
        diagonalAsc(x,y,grindSpacing)
      }
      if(choice === 1){
        diagonalDesc(x,y,grindSpacing);
      } 
    }
  }
}