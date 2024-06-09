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
function Tetris_Grid_drawing_outline(){

  for(let y = 0; y<NUM_ROWS; y++){
    for(let x =0 ; x<NUM_COLS; x++){
      rectMode(CORNER);
      let type = tetris_outline[y][x]
      if(type === 0){
        fill(255);
      }
      else if(type === 1){
        fill(255, 0, 0);
      }
      else if(type === 2){
        fill(0, 255, 0);
      }
      else if(type === 3){
        fill(127,0,255);
      }
      else if(type === 4){
        fill(255,255,0);
      }
      else if(type === 5){
        fill(255,128,0);
      }
      else if(type === 6){
        fill(0,102,204);
      }
      else if(type === 7){
        fill(51,255,255);
      }
      rect(x*squareSize + 200 , y*squareSize + 200, squareSize);
    }  
  }
}

