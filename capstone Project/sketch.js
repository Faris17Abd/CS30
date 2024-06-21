

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
  [[0, 6, 0],
   [0, 6, 0],
   [6, 6, 0]
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
let moveInterval = 30
let horizontalMoveTimer = 0;
const horizontalMoveInterval = 5;
let collisionDelayTimer = 0;
const collisionDelay = 30;
let isCollidingFlag = false;
let holdblock = false;
let heldblock = [[0]];
let canhold = true;

let nextBlocks = [];
const NEXT_BLOCKS_COUNT = 4;
let level = 1;
let linesCleared = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  initializeGame();
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
    drawNextBlocks();
    Holdingblocks();
    drawHUD();
  } else {
    textSize(32);
    fill(0);
    text('Game over', width/2 - 80, height/2);
    textSize(24);
    text("Lines cleared: " + linesCleared, width/2 - 80, height/2 + 40);
    text('Press R to restart', width/2 - 80, height/2 + 80);
  }
}

function initializeGame() {
  tetris_outline = [
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
  currentblock = random(blocks);
  nextBlocks = [];
    for (let i = 0; i < 4; i++) {
      let blockType = random(blocks);
      nextBlocks.push(blockType);
    }
  blockrotation = 0;
  blockx = 3;
  blocky = 0;
  Gameover = false;
  holdblock = false;
  heldblock = [[0]];
  canhold = true;
  level = 1;
  linesCleared = 0;
  moveInterval = 30;
}

function placingblock() {
  currentblock = nextBlocks.shift();
  nextBlocks.push(random(blocks));
  blockrotation = 0;
  blockx = 3;
  blocky = 0;
  canhold = true;
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

function drawNextBlocks() {
  for (let i = 0; i < NEXT_BLOCKS_COUNT; i++) {
    let nextBlock = nextBlocks[i];
    for (let y = 0; y < nextBlock[0].length; y++) {
      for (let x = 0; x < nextBlock[0][y].length; x++) {
        if (nextBlock[0][y][x] !== 0) {
          fill(getColor(nextBlock[0][y][x]));
          rect((x + NUM_COLS + 2) * squareSize + 200, (y + i * 4) * squareSize + 200, squareSize, squareSize);
        }
      }
    }
  }
}

function Holdingblocks(){
  if(holdblock && heldblock[0][0] !== 0){
    for(let y = 0; y < heldblock[0].length; y++){
      for(let x = 0; x < heldblock[0][y].length; x++){
        if(heldblock[0][y][x] !== 0){
          fill(getColor(heldblock[0][y][x]));
          rect(x * squareSize + 50, y * squareSize + 50, squareSize, squareSize);
        }
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

function drawHUD() {
  textSize(16);
  fill(0);
  text("Level: " + level, 200 + NUM_COLS * squareSize + 70, 160);
  text("Lines: " + linesCleared, 200 + NUM_COLS * squareSize + 70, 180);
}

function getColor(type){ 
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
  if(keyCode === 67){
    if(canhold === true){
      if(holdblock === true){
        let temp = currentblock;
        currentblock = heldblock;
        heldblock = temp;
        blockrotation = 0;
        blockx = 3;
        blocky = 0;
      } else{
        heldblock = currentblock;
        placingblock();
      }
      holdblock = true;
      canhold = false;
    }
  }
  if (keyCode === 82 && Gameover) { // R key to restart
    initializeGame();
  }
}

function gettingblocksdown(){
  if(!isitcolliding(blockx,blocky + 1,currentblock[blockrotation])){
    blocky++;
    isCollidingFlag = false;
  } else{
    if(isCollidingFlag === false){
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
      if(tetris_outline[y][x] === 0){
        islinefull = false;
        break; 
      }
    }
    if(islinefull === true){
      for(let row = y; row > 0; row--){
        for(let col = 0; col < NUM_COLS; col++){
          tetris_outline[row][col] = tetris_outline[row - 1][col];
        }
      }
      for(let col = 0; col < NUM_COLS; col++){
        tetris_outline[0][col] = 0;
      }
      y++;
      linesCleared++;
      if (linesCleared >= level * 10) {
        level++;
        moveInterval = max(5, moveInterval - 2);
      }
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
