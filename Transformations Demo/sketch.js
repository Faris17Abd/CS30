// // Basic Transformations Sandbox


// let originalSpacing = 20;


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   angleMode(DEGREES);
// }

// function draw() {
//   background(220);
//   drawStaticClock();
//   drawclockhands();
// }

//   //transformation one: TRANSLATION
//   // push();
//   // translate(150,50);
//   // drawBasicGrid(150);

 

//   //add push()  pop()




//   //transformation two: SCALE
//   // rectangleRed(40,0);

//   // let scaleamount = 2.5;
//   // translate(140,140);
//   // scale(scaleamount);
//   // drawBasicGrid(100);
//   // rectangleBlue(100,100);



//   //transformation three: ROTATION
//   //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
//   // angleMode(DEGREES);
//   // rotate(45);
//   // translate(200,0); 
//   // drawBasicGrid(100);
//   // face(200,0);

//   //Combinations of Transformations

 


// function drawclockhands(){
//   push();
//   stroke(200,0,0);
//   strokeWeight(1);
//   rotate(second()*6);
//   line(0,0,0,130);
//   pop();
// }

// function drawStaticClock(){
//   // Using basic transformations, draw 
//   // an analog clock face
//   // main circle first:
//   stroke(0);
//   translate(width/2, height/2);
//   push(); //new coordinate system
//   circle(0,0,300);
  
//    // all the individual ticks
//   let count = 0; let angle = 6;
//   while(count < 60){
//     if(count % 5 === 0){
//       strokeWeight(3);
//       line(110,0,140,0);
//      }
//      else{
//        strokeWeight(1);
//        line(125,0,140,0);
//      }
     
//     rotate(angle);
//     count++;
//    }
//    pop();
//  }



// function drawBasicGrid(shade) {
//   //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
//   stroke(shade);
//   for (let x = 0; x < width; x += 20) {
//     line(x, 0, x, height);
//   }
//   for (let y = 0; y < height; y += 20) {
//     line(0, y, width, y);
//   }

//   //Draw "X" at the origin
//   strokeWeight(3);
//   stroke(0);
//   line(-5,0,5,0);
//   line(0,5,0,-5);
//   strokeWeight(1);
// }
// An analog clock exercise
// Mr. Scott
// March 19 2024
//...using basic transformations
// 1. draw the base clock (static)
// 2. add animated clock hands (hours, minutes, seconds)

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  drawStaticClock();
  drawClockHands();
}

function drawClockHands(){
  //seconds hand first:
  push();
  stroke(200,0,0);
  strokeWeight(1);
  rotate(second()*6);
  line(0,0,0,130);
  pop();
  
  //minutes hand second:

  //hour hand third:
}


function drawStaticClock(){
  // Using basic transformations, draw 
  // an analog clock face
  // main circle first:
  stroke(0);
  translate(width/2, height/2);
  push(); //new coordinate system
  circle(0,0,300);

  // all the individual ticks
  let count = 0; let angle = 6;
  while(count < 60){
    if(count % 5 === 0){
      strokeWeight(3);
      line(110,0,140,0);
    }
    else{
      strokeWeight(1);
      line(125,0,140,0);
    }
   
    rotate(angle);
    count++;
  }
  pop();
  print(count);
}