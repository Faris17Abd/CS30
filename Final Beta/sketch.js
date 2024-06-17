// your final challenge

let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];
// global varibles
let spirals = []; // to hold spiral objects
let currentState = 0;
let idleIndex = 0; let swipeIndex = 0;


function preload() { // to ensure loading is done
  //sprials 00-09   10-15
  for (let i = 0; i <= 15; i++) {
    if (i < 10) {
      spiralImages.push(loadImage("assets/Circle/Circle Animation0" + i + ".png"));

    }
    else {
      spiralImages.push(loadImage("assets/Circle/Circle Animation" + i + ".png"))
    }
  }
  //gorilla idle images
  for (let i = 1; i <= 6; i++) {
    gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));

  }
  for (let i = 1; i <= 6; i++) {
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (currentState === 0) currentState = 1;
  else currentState = 0;
}

function draw() {
  // gorilla code 
  background(255)
  if (currentState === 0) {
    image(gorillaIdle[idleIndex], width / 2, height / 2);
    if (frameCount % 8 === 0) {
      idleIndex++;
      if (idleIndex > 5) idleIndex = 0;
    }
    if (currentState === 1) {
      image(gorillaSwipe[swipeIndex], width / 2, height / 2);
      if (frameCount % 8 === 0) {
        swipeIndex++;
        if (swipeIndex > 5) swipeIndex = 0;
      }
    }
  }


  //draw Spirals
  for (let i = 0; i < spirals.length; i++) {
    let s = spirals[i];
    s.display();
    if (s.active === false) {
      spirals.splice(i, 3);
    }
  }
}

function mousePressed() {
  spirals.push(new Spiral(mouseX, mouseY));
}


class Spiral { // frames 0 - 15
  constructor(x, y) {//happens once, for each object created
    this.pos = createVector(x, y);
    this.currentFrame = 0;
    this.active = true;
  }
  display() {
    if (this.currentFrame > 15) {
      this.active = false;
    }
    else {
      image(spiralImages[this.currentFrame], this.pos.x, this.pos.y);
      if (frameCount % 3 === 0) {
        this.currentFrame++;
      }
    }
  }

}