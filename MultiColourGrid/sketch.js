// MultiColorGrid
// Fares Abdalla
// 03/05/2024
// Buildinig a grid that so happens to be multi colored.



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  squareBack();
}

function squareBack(){
  square(windowWidth, windowHeight, 40)
}