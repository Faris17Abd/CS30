// Nested loops and gradiant background
// Fares Abdlla
// February 29, 2024
// creating a gradiant + drawing with nested loops
 
let rectheight = 1
let circleSize = 30
let spacing = 25
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
    let c = color(mouseX, mouseY, map(y,0,height, 255, 0),map(y,0,height, 0, 255));
    fill(c);
    rect(0, y, width, rectheight)
    y += rectheight;
  }
}

function circleDistance(x1, y1, x2,  y2){
  let a = abs(x1-x2);
  let b = abs(y1-y2);
  let c = sqrt(pow(a,2) + pow(b,2));
  return c;
}

function nestedloops(){
  for(let x = 0; x < windowWidth; x+=spacing){
    for(let y = 0; y < windowHeight; y+=spacing){
      let d = round(circleDistance(x,y,mouseX,mouseY));
      if(d > 100){
        fill(0);
      }
      else{
        fill(255,0,0);
      }

     
      circle(x,y,circleSize);
      fill(30, 40, 153);
      textAlign(CENTER,CENTER);
      text(d, x, y);
    }
  }
}

