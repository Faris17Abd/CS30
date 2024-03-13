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
      let redV = random(0, 255);
      let greenV = random(0, 255);
      let blueV = random(0, 255);
      fill(redV, greenV, blueV);
      square(x, y, squaresize);

    }
  }
}