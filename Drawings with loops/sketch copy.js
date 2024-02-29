// Nested loops and gradiant background
// Fares Abdlla
// February 29, 2024
// creating a gradiant + drawing with nested loops
 
rectheight = 40

function setup() {
  createCanvas(windowWidth , windowHeight);
}



function draw() {
  background(220);
  gradiantBackground()
}

function gradiantBackground(){
  // Use a single loop to draw serveral rectangles
  // Then colour them into a gradiant
  let y = 0;
  while(y < height){
    fill(y/3);
    rect(0, y, width, rectheight)
    y += rectheight;
  }
}

