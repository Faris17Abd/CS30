// everything here is basically the same as the first tetris game, however just now accesible for two player

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
  let tetris_outlinetwo = [
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
  let blocks2 = []
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
  blocks2.push(zigzag); 
  blocks2.push(reversezigzag);
  blocks2.push(twoby2);
  blocks2.push(Tshape);
  blocks2.push(Deathnotereference);
  blocks2.push(reversedeathnoterefernce);
  blocks2.push(Longblock);
  
  let currentblock;
  let currentblock2;
  let blockrotation;
  let blockrotation2;
  let blockx, blocky;
  let blockx2, blocky2; 
  let Gameover = false;
  let squareSize = 25;
  const NUM_ROWS = 20; const NUM_COLS = 10;
  const NUM_ROWS2 = 20; const NUM_COLS2 = 10
  let moveInterval = 30
  let moveInterval2 = 30
  let horizontalMoveTimer = 0;
  let horizontalMoveTimer2 = 0;
  const horizontalMoveInterval = 5;
  const horizontalMoveInterval2 = 5;
  let collisionDelayTimer = 0;
  let collisionDelayTimer2 = 0;
  const collisionDelay = 30;
  const collisionDelay2 = 30
  let isCollidingFlag = false;
  let isCollidingFlag2 = false;
  let holdblock = false;
  let holdblock2 = false
  let heldblock = [[0]];
  let heldblock2 = [[0]];
  let canhold = true;
  let canhold2 = true;
  
  let nextBlocks = [];
  let nextBlocks2 = [];
  const NEXT_BLOCKS_COUNT = 4;
  const NEXT_BLOCKS_COUNT2 = 4;
  let level = 1;
  let level2 = 1;
  let linesCleared = 0;
  let linesCleared2 = 0;
  
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
      if(frameCount % moveInterval2 === 0){
        gettingblocksdown2()
      }
      blockmovement();
      blockmovement2();
      Tetris_Grid_drawing_outline();
      Tetris_Grid_drawing_outline2();
      draw_current_block();
      draw_current_block2();
      drawNextBlocks();
      drawNextBlocks2();
      Holdingblocks();
      Holdingblocks2();
      drawHUD();
      drawHUD2();
    } else {
      textSize(32);
      fill(0);
      text('Game over', width/2 - 80, height/2);
      textSize(24);
      text("player 1 Lines cleared: " + linesCleared, width/2 - 80, height/2 + 40);
      text("player 2 Lines cleared: " + linesCleared2, width/2 - 80, height/2 + 80);
      text('Press R to restart', width/2 - 80, height/2 + 120);
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
  tetris_outlinetwo = [
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
    currentblock2 = random(blocks2);
    nextBlocks = [];
      for (let i = 0; i < 4; i++) {
        let blockType = random(blocks);
        nextBlocks.push(blockType);
      }
    nextBlocks2 = [];
        for (let i = 0; i < 4; i++) {
            let blockType2 = random(blocks2);
            nextBlocks2.push(blockType2);
      }
    blockrotation = 0;
    blockrotation2 = 0;
    blockx = 3;
    blockx2 = 3;
    blocky = 0;
    blocky2 = 0
    Gameover = false;
    holdblock = false;
    holdblock2 = false;
    heldblock = [[0]];
    heldblock2 = [[0]];
    canhold = true;
    canhold2 = true;
    level = 1;
    level2 = 1;
    linesCleared = 0;
    linesCleared2= 0;
    moveInterval = 30;
    moveInterval2 = 30;
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
  
  function placingblock2() {
    currentblock2 = nextBlocks2.shift();
    nextBlocks2.push(random(blocks2));
    blockrotation2 = 0;
    blockx2 = 3;
    blocky2 = 0;
    canhold2 = true;
    if(isitcolliding2(blockx2, blocky2, currentblock2[blockrotation2])){
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
  
  function draw_current_block2() {
    for (let y = 0; y < currentblock2[blockrotation2].length; y++) {
      for (let x = 0; x < currentblock2[blockrotation2][y].length; x++) {
        if (currentblock2[blockrotation2][y][x] !== 0) {
          fill(getColor(currentblock2[blockrotation2][y][x]));
          rect((blockx2 + x) * squareSize + 800, (blocky2 + y) * squareSize + 200, squareSize, squareSize);
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
  
  function drawNextBlocks2() {
    for (let i = 0; i < NEXT_BLOCKS_COUNT2; i++) {
      let nextBlock2 = nextBlocks2[i];
      for (let y = 0; y < nextBlock2[0].length; y++) {
        for (let x = 0; x < nextBlock2[0][y].length; x++) {
          if (nextBlock2[0][y][x] !== 0) {
            fill(getColor(nextBlock2[0][y][x]));
            rect((x + NUM_COLS2 + 2) * squareSize + 800, (y + i * 4) * squareSize + 200, squareSize, squareSize);
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
  
  function Holdingblocks2(){
    if(holdblock2 && heldblock2[0][0] !== 0){
      for(let y = 0; y < heldblock2[0].length; y++){
        for(let x = 0; x < heldblock2[0][y].length; x++){
          if(heldblock2[0][y][x] !== 0){
            fill(getColor(heldblock2[0][y][x]));
            rect(x * squareSize + 700, y * squareSize + 50, squareSize, squareSize);
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
  
  function Tetris_Grid_drawing_outline2(){
    for(let y = 0; y<NUM_ROWS2; y++){
      for(let x =0 ; x<NUM_COLS2; x++){
        rectMode(CORNER);
        let type = tetris_outlinetwo[y][x]
        fill(getColor(type));
        rect(x*squareSize + 800 , y*squareSize + 200, squareSize, squareSize);
      }  
    }
  }
  
  function drawHUD() {
    textSize(16);
    fill(0);
    text("Level: " + level, 200 + NUM_COLS * squareSize + 70, 160);
    text("Lines: " + linesCleared, 200 + NUM_COLS * squareSize + 70, 180);
  }
  
  function drawHUD2() {
    textSize(16);
    fill(0);
    text("Level: " + level2, 800 + NUM_COLS2 * squareSize + 70, 160);
    text("Lines: " + linesCleared2, 800 + NUM_COLS2 * squareSize + 70, 180);
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
      if(keyIsDown(65)){
        if(!isitcolliding(blockx - 1, blocky, currentblock[blockrotation])){
          blockx--;
          horizontalMoveTimer = frameCount;
        }
      }
      if(keyIsDown(68) ){
        if(!isitcolliding(blockx + 1, blocky, currentblock[blockrotation])){
          blockx++;
          horizontalMoveTimer = frameCount;
        }
      }
      if(keyIsDown(83)){
        if(!isitcolliding(blockx, blocky + 1, currentblock[blockrotation])){
          blocky++;
        }
      }
    }
  }
  
  function blockmovement2(){
    if(frameCount - horizontalMoveTimer2 > horizontalMoveInterval2){ 
      if(keyIsDown(LEFT_ARROW)){
        if(!isitcolliding2(blockx2 - 1, blocky2, currentblock2[blockrotation2])){
          blockx2--;
          horizontalMoveTimer2 = frameCount;
        }
      }
      if(keyIsDown(RIGHT_ARROW)){
        if(!isitcolliding2(blockx2 + 1, blocky2, currentblock2[blockrotation2])){
          blockx2++;
          horizontalMoveTimer2 = frameCount;
        }
      }
      if(keyIsDown(DOWN_ARROW)){
        if(!isitcolliding2(blockx2, blocky2 + 1, currentblock2[blockrotation2])){
          blocky2++;
        }
      }
    }
  }
  function keyPressed(){
    if(keyCode === 87){
        let nextrotation = (blockrotation + 1) % currentblock.length;
      if(!isitcolliding(blockx, blocky, currentblock[nextrotation])) {
        blockrotation = nextrotation;
      }
    }
    if(keyCode === UP_ARROW){
      let nextrotation2 = (blockrotation2 + 1) % currentblock2.length;
      if(!isitcolliding2(blockx2, blocky2, currentblock2[nextrotation2])) {
        blockrotation2 = nextrotation2;
      }
    }
    if(keyCode === 86){
      while(!isitcolliding(blockx, blocky + 1, currentblock[blockrotation])){
        blocky++;
      }
      mergingthemblocks();
      clearline();
      placingblock();
      isCollidingFlag = false;
    }
  
    if(keyCode === 80){
        while(!isitcolliding2(blockx2, blocky2 + 1, currentblock2[blockrotation2])){
          blocky2++;
        }
        mergingthemblocks2();
        clearline2();
        placingblock2();
        isCollidingFlag2 = false;
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
    if(keyCode === 79){
        if(canhold2 === true){
          if(holdblock2 === true){
            let temp2 = currentblock2;
            currentblock2 = heldblock2;
            heldblock2 = temp2;
            blockrotation2 = 0;
            blockx2 = 3;
            blocky2 = 0;
          } else{
            heldblock2 = currentblock2;
            placingblock2();
          }
          holdblock2 = true;
          canhold2 = false;
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
  
  function gettingblocksdown2(){
    if(!isitcolliding2(blockx2,blocky2 + 1,currentblock2[blockrotation2])){
      blocky2++;
      isCollidingFlag2 = false;
    } else{
      if(isCollidingFlag2 === false){
        collisionDelayTimer2 = frameCount;
        isCollidingFlag2 = true;
      }
      if(frameCount - collisionDelayTimer2 >= collisionDelay2){
        mergingthemblocks2();
        clearline2();
        placingblock2();
        isCollidingFlag2 = false;
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
  
  function mergingthemblocks2(){
    for(let y = 0; y < currentblock2[blockrotation2].length; y++){
      for(let x = 0; x < currentblock2[blockrotation2][y].length; x++){
        if(currentblock2[blockrotation2][y][x] !== 0){
          tetris_outlinetwo[blocky2 + y][blockx2 + x] = currentblock2[blockrotation2][y][x];
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
  
  function clearline2(){
    for(let y = NUM_ROWS2 - 1; y >= 0; y--){
      let islinefull2 = true;
      for(let x = 0; x < NUM_COLS2; x++){
        if(tetris_outlinetwo[y][x] === 0){
          islinefull2 = false;
          break; 
        }
      }
      if(islinefull2 === true){
        for(let row = y; row > 0; row--){
          for(let col = 0; col < NUM_COLS2; col++){
            tetris_outlinetwo[row][col] = tetris_outlinetwo[row - 1][col];
          }
        }
        for(let col = 0; col < NUM_COLS2; col++){
          tetris_outlinetwo[0][col] = 0;
        }
        y++;
        linesCleared2++;
        if (linesCleared2 >= level * 10) {
          level2++;
          moveInterval2 = max(5, moveInterval2 - 2);
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
  
  function isitcolliding2(blockx2, blocky2, block2) {
    for (let y = 0; y < block2.length; y++) {
      for (let x = 0; x < block2[y].length; x++) { 
        if (block2[y][x] !== 0) {
          let newY2 = blocky2 + y;
          let newX2 = blockx2 + x;
          if (newX2 < 0 || newX2 >= NUM_COLS2 || newY2 >= NUM_ROWS2 || tetris_outlinetwo[newY2][newX2] !== 0) {
            return true;
          }
        }
      }
    }
    return false;
  }
  