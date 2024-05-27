// Perlin Noise
// Fares Abdalla
// April 14th, 2024
// Generating a terrain using noise.


let rectWidth = 2;
let rectHeightTime = 0, noiseShift = 0.005;
let expandingNoise = 0;
let peakX, peakY;
let allheights, averageheight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function keyPressed() { 
  //With this keyPressed, if the user were to press the left or right arrow,
  //they will either increase the rectwidth by a 0.1 or decrease by 0.1 
  print (keyPressed)
  if (keyCode === LEFT_ARROW) {
    if (rectWidth < 1) {
      rectWidth -= 0;
    } else {
      rectWidth = rectWidth - 0.1;
    }
  }
  if (keyCode === RIGHT_ARROW) {
    if (rectWidth > 3) {
      rectWidth -= 0;
    } else {
      rectWidth = rectWidth + 0.1;
    }
  }
  GenerateTerrain();
}
function GenerateTerrain(noiseValue){
  // This will draw smooth moving terrains with random heights using noise()
  expandingNoise += noiseShift;
  peakY = height;
  allheights = [];
  
  for(let x = 0; x < width; x += rectWidth){
    noiseValue += noiseShift;
    let rectHeight = noise(noiseValue) * height;
    allheights.push(height - rectHeight);

    fill(0);
    noStroke();
    rect(x , height, x + rectWidth, height - rectHeight);
    
    // The coding below calculates the highest point of the rectangles
    // Also needs to be in this part of the coding so that rectwidth and height aren't case sensitive
    if(peakY > height - rectHeight){
      peakX = x + rectWidth;
      peakY = height - rectHeight;
    }
  }
}


function drawFlag(x,y){
  // The coding draws the flag
  fill(250,150,232);
  rect(x - 2, y, x + 2, y - 30);
  triangle(x - 2, y - 40, x - 2, y - 20, x + 15, y - 30);
}

function drawAverage(){
  // Will render the average height of all the rectangles
  let sumHeights = 0;
  for(let h of allheights){
    sumHeights = sumHeights + h;
  }

  averageheight = sumHeights/allheights.length;
  stroke(250,150,232);
  strokeWeight(5);
  line(0, averageheight, width, averageheight);
}

function draw() {
  background(220);
  GenerateTerrain(expandingNoise);
  drawFlag(peakX, peakY);
  drawAverage();
}