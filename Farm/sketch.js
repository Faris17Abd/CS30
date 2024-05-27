// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles = [];
let level = [
  [0, 1, 0, 3, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]

]

const COLUMNS = 5; const ROWS = 5; let TITLE_SIZE = 100;
let playerX = 3; let playerY =4;
function preload(){
  for(let i = 0; i<4; i++){
    tiles.push(loadImage("assets/" + i + ".png"));
  }

}

function setup() {
  createCanvas(COLUMNS * TITLE_SIZE, ROWS * TITLE_SIZE);
  level[playerY][playerX] = 2;

}

function draw() {
  background(220);
}

function renderBoard(){
  for(let x = 0; x<COLUMNS; x++){
    for(let y = 0; y<ROWS; y++){
      let type = level[y][x]
      let currentImage = tiles[type];
      image(currentImage, x * TITLE_SIZE)
    }
  }
}