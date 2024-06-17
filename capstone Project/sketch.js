// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tetris_outline = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let blocks = []
let zigzag = [
  [[1, 1, 0], 
   [0, 1, 1],
   [0, 0, 0]
 ],
 [[0, 0, 1],
  [0, 1, 1],
  [0, 1, 0]
 ],
 [[1, 1, 0],
  [0, 1, 1],
  [0, 0, 0]
 ],
 [[0, 1, 0],
  [1, 1, 0],
  [1, 0, 0]
 ]
]
let reversezigzag = [
  [[0, 2, 2],
   [2, 2, 0],
   [0, 0, 0]
  ],
  [[0, 2, 0],
   [0, 2, 2],
   [0, 0, 2]
  ],
  [[0, 2, 2],
   [2, 2, 0],
   [0, 0, 0]
  ],
  [[0, 2, 2],
   [2, 2, 0],
   [0, 0, 0]
  ]
]
let twoby2 = [
  [[4, 4, 0],
   [4, 4, 0],
   [0, 0, 0]
  ]
]
let Tshape = [
  [[0, 3, 0],
   [3, 3, 3],
   [0, 0, 0]
  ],
  [[0, 3, 0],
   [0, 3, 3],
   [0, 3, 0]
  ],
  [[3, 3, 3],
   [0, 3, 0],
   [0, 0, 0]
  ],
  [[0, 3, 0],
   [3, 3, 0],
   [0, 3, 0]
  ]
]
let Deathnotereference = [
  [[0, 0, 5],
   [5, 5, 5],
   [0, 0, 0]
  ],
  [[0, 5, 0],
   [0, 5, 0],
   [0, 5, 5]
  ],
  [[5, 5, 5],
   [5, 0, 0],
   [0, 0, 0]
  ],
  [[5, 5, 0],
   [0, 5, 0],
   [0, 5, 0]
  ]
]
let reversedeathnoterefernce = [
  [[6, 0, 0],
   [6, 6, 6],
   [0, 0, 0]
  ],
  [[0, 6, 6],
   [0, 6, 0],
   [0, 6, 0]
  ],
  [[0, 0, 0],
   [6, 6, 6],
   [0, 0, 6]
  ],
  [[6, 6, 0],
   [0, 6, 0],
   [0, 6, 0]
  ]
]
let Longblock = [
  [[0, 0, 0, 0],
   [7, 7, 7, 7],
   [0, 0, 0, 0],
   [0, 0, 0, 0]
  ],
  [[0, 0, 7, 0],
   [0, 0, 7, 0],
   [0, 0, 7, 0],
   [0, 0, 7, 0]
  ],
  [[0, 0, 0, 0],
   [7, 7, 7, 7],
   [0, 0, 0, 0],
   [0, 0, 0, 0]
  ],
  [[0, 7, 0, 0],
   [0, 7, 0, 0],
   [0, 7, 0, 0],
   [0, 7, 0, 0]
  ]
]

blocks.push(zigzag); 
blocks.push(reversezigzag);
blocks.push(twoby2);
blocks.push(Tshape);
blocks.push(Deathnotereference);
blocks.push(reversedeathnoterefernce);
blocks.push(Longblock);

let currentblock;
let blockrotation;
let blockx, blocky; 
let Gameover = false;
let squareSize = 25;
const NUM_ROWS = 20; const NUM_COLS = 10;
let row, col;
const moveInterval = 30
let horizontalMoveTimer = 0;
const horizontalMoveInterval = 5;
let collisionDelayTimer = 0;
const collisionDelay = 30;
let isCollidingFlag = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  placingblock();
  frameRate(60);
}

function draw() { 
  background(220);
  if(!Gameover){
    if(frameCount % moveInterval === 0){
      gettingblocksdown()
    }
    blockmovement();
    Tetris_Grid_drawing_outline();
    draw_current_block();
  } else {
    textSize(32);
    fill(0);
    text('Game over', width/2 - 80, height/2);
  }
}

function placingblock(){
  let blocktype = random(blocks);
  currentblock = blocktype;
  blockrotation = 0
  blockx = 3
  blocky = 0
  if(isitcolliding(blockx, blocky, currentblock[blockrotation])){
    Gameover = true; 
 }
}

function draw_current_block() {
  for (let y = 0; y < currentblock[blockrotation].length; y++) {
    for (let x = 0; x < currentblock[blockrotation][y].length; x++) {
      if (currentblock[blockrotation][y][x] !== 0) {
        fill(getColor(currentblock[blockrotation][y][x]));
        rect((blockx + x) * squareSize + 200, (blocky + y) * squareSize + 200, squareSize, squareSize);
      }
    }
  }
}


function Tetris_Grid_drawing_outline(){

  for(let y = 0; y<NUM_ROWS; y++){
    for(let x =0 ; x<NUM_COLS; x++){
      rectMode(CORNER);
      let type = tetris_outline[y][x]
      fill(getColor(type));
      rect(x*squareSize + 200 , y*squareSize + 200, squareSize, squareSize);
    }  
  }
}


function getColor(type){ // this makes it easier to access the colors
  if (type === 0) {
    return color(255);
  } 
  else if (type === 1) {
    return color(255, 0, 0);
  } 
  else if (type === 2) {
    return color(0, 255, 0);
  }
   else if (type === 3) {
    return color(127, 0, 255);
  }
   else if (type === 4) {
    return color(255, 255, 0);
  }
   else if (type === 5) {
    return color(255, 128, 0);
  }
   else if (type === 6) {
    return color(0, 102, 204);
  }
   else if (type === 7) {
    return color(51, 255, 255);
  }
}

function blockmovement(){
  if(frameCount - horizontalMoveTimer > horizontalMoveInterval){ 
    if(keyIsDown(LEFT_ARROW)){
      if(!isitcolliding(blockx - 1, blocky, currentblock[blockrotation])){
        blockx--;
        horizontalMoveTimer = frameCount;
      }
    }
    if(keyIsDown(RIGHT_ARROW)){
      if(!isitcolliding(blockx + 1, blocky, currentblock[blockrotation])){
        blockx++;
        horizontalMoveTimer = frameCount;
      }
    }
    if(keyIsDown(DOWN_ARROW)){
      if(!isitcolliding(blockx, blocky + 1, currentblock[blockrotation])){
        blocky++;
      }
    }
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    let nextrotation = (blockrotation + 1) % currentblock.length;
    if(!isitcolliding(blockx, blocky, currentblock[nextrotation])) {
      blockrotation = nextrotation;
    }
  }
  if(keyCode === 32){
    while(!isitcolliding(blockx, blocky + 1, currentblock[blockrotation])){
      blocky++;
    }
    mergingthemblocks();
    clearline();
    placingblock();
    isCollidingFlag = false;
  }
  
}

function gettingblocksdown(){
  if(!isitcolliding(blockx,blocky + 1,currentblock[blockrotation])){
    blocky++;
    isCollidingFlag = false;
  } else{
    if(!isCollidingFlag){
      collisionDelayTimer = frameCount;
      isCollidingFlag = true;
    }
    if(frameCount - collisionDelayTimer >= collisionDelay){
      mergingthemblocks();
      clearline();
      placingblock();
      isCollidingFlag = false;
    }
  }
}

function mergingthemblocks(){
  for(let y = 0; y < currentblock[blockrotation].length; y++){
    for(let x = 0; x < currentblock[blockrotation][y].length; x++){
      if(currentblock[blockrotation][y][x] !== 0){
        tetris_outline[blocky + y][blockx + x] = currentblock[blockrotation][y][x];
      }
    }
  }
}

function clearline(){
  for(let y = NUM_ROWS - 1; y >= 0; y--){
    let islinefull = true;
    for(let x = 0; x < NUM_COLS; x++){
      if(tetris_outline[y][x] === 0);
      islinefull = false;
      break
    }
    if(islinefull){
      for(let row = y; row >= 0; row--){
        for(let col = x; col >= 0; col++){
          tetris_outline[row][col] = tetris_outline[row-1][col];
        }
        }
        for(let col = 0; col < NUM_COLS; col++){
          tetris_outline[0][col] = 0;
        }
        y++;
    }
  }
}

function isitcolliding(blockx, blocky, block) {
  for (let y = 0; y < block.length; y++) {
    for (let x = 0; x < block[y].length; x++) { 
      if (block[y][x] !== 0) {
        let newY = blocky + y;
        let newX = blockx + x;
        if (newX < 0 || newX >= NUM_COLS || newY >= NUM_ROWS || tetris_outline[newY][newX] !== 0) {
          return true;
        }
      }
    }
  }
  return false;
}

