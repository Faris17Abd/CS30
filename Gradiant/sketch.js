// Nested loops and gradiant background
// Fares Abdlla
// February 29, 2024
// creating a gradiant + drawing with nested loops
 
rectheight = 1

function setup() {
  createCanvas(windowWidth , windowHeight);
  noStroke();
}


function draw() {
  background(220);
  gradiantBackground();
  nestedloops();
}

function gradiantBackground(){
  // Use a single loop to draw serveral rectangles
  // Then colour them into a gradiant
  let y = 0;
  while(y < height){
    let c = color(mouseX,mouseY,map(y,0,height, 0, 255),map(y,0,height, 0, 255));
    fill(c);
    rect(0, y, width, rectheight)
    y += rectheight;
  }
}

function nestedloops(){
  for(let x = 0; x < 100; x+=spacing){
    for(let y = 0; y < 100; y+=spacing){
      circle(x,y,10);
    }
  }
}

