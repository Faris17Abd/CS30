// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colourtime = 100;
x = 0
y = 0
squaresize = 50
let greenV;
let redV;
let blueV;
let squarecolour;

function setup() {
  createCanvas(400, 400);
  squareback();
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function keyPressed() {
  squareback();
}


function mousePressed() {
  print (mouseButton)
  if (mouseButton === LEFT) {
    if (squaresize < 1) {
      squaresize -= 0;
    } else {
      squaresize = squaresize / 2;
    }
  }
  if (mouseButton === RIGHT) {
    if (squaresize > 399) {
      squaresize -= 0;
    } else {
      squaresize = squaresize * 2;
    }
  }
  squareback();
}

function squareback() {
  for (let x = 0; x < width; x += squaresize) {
    for (let y = 0; y < height; y += squaresize) {

      colourtime += 1;
      redV = noise(colourtime);
      redV = map(redV, 0,1,0,190);
      greenV = noise(colourtime);
      greenV =map(greenV, 0,1,0,50);
      blueV = noise(colourtime);
      blueV = map(blueV, 0,1,100,0)
      squarecolour = color(redV, greenV, blueV);
      square(x, y, squaresize);
      fill(squarecolour)
    }
  }
}