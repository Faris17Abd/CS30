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
let blockx;
let blocky; 
let Gameover = false;
let squareSize = 25;
const NUM_ROWS = 20; const NUM_COLS = 10;

let row, col;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() { 
  
  Tetris_Grid_drawing_outline();
}

function placingblock(){

}

function draw_current_block () {
  for(y < 0; y < currentblock[blockrotation].length; y++){
    for(x < 0; x < currentblock[blockrotation][y]; x++){
      if(currentblock[blockrotation[y][x]])
        fill(getColor(type));
        rect((block + x) + squareSize + 200, (block + y) *squareSize + 200, squareSize);
  }
 }     
}


function Tetris_Grid_drawing_outline(){

  for(let y = 0; y<NUM_ROWS; y++){
    for(let x =0 ; x<NUM_COLS; x++){
      rectMode(CORNER);
      let type = tetris_outline[y][x]
      fill(getColor(type));
      rect(x*squareSize + 200 , y*squareSize + 200, squareSize);
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
function isitcolliding(x, y, block){
  for(let i = 0; i < block.length; i++){ // goes through each row of the block
    for(let j = 0; i < block[i].length; j++) // goes through each colum of current row
      if(block.length[i][j] !== 0){ // Checks if the current cell is part of the block
        let newx = x + j;
        let newy = y + i;
        // Bottom line checks if the tetrominoes are colliding with anything
        if(newx < 0 || newx >= NUM_COLS || newy >= NUM_ROWS || newy >= 0 && Tetris_Grid_drawing_outline[newy][newx] !== 0){
          return true;
        }
      }
  }
  return false
}

