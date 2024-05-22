// puzzle game
// Fares Abdalla
// May 20th, 2024


let numsrows = 4;
let numscols = 5;
let rectWidth, rectHeight;
let griddata = [[]];
let won = [false];
let mousepostion = [];


function setup() {
  //Determining a size for each square
  createCanvas(400, 400);
  rectWidth = width/numscols;
  rectHeight = height/numsrows;
  // adding entries to the griddata array
  fillgridata();
}

function draw() {
  if(won[0]){
    drawgrid(false);
    fill(won[1]);
    textAlign(CENTER);
    textSize(50);
    text("You Win!", width/2, height/2);
    noLoop();
    return;
  }
  background(220);
  activesquare(); //determine the tile that the mouse cursor is over.
  drawgrid();  //display the game board that is currently in use (along with the overlay)
}

function fillgridata(){
  for(let i = 0; i < numsrows; i++){
    griddata[i] = [];
    for(let j = 0; j<numscols; j++){
      griddata[i][j] = (round(random(0,2)) == 0); //Checking to see if it is true or false
    }
  }
}

function mousePressed(){
  // A mouse click causes the cross-shaped pattern to flip.
  // The flip function verifies boundary constraints to 
  // guarantee in-bounds access for the array.
  if(won[0]) return;
  flip(mousepostion[0][1], mousepostion[0][0]);
  
  if((!keyIsPressed===true)){
    for(let i of mousePressed.slice(1)){
      flip(i[1], i[0]);
    }
  }
  //The only tile that will flip if shift is pressed and the mouse 
  //is clicked is the current tile.
  else if(key === SHIFT){
    flip(row, col);
  }
  if(checkForWin()) won[0]=true
}

function flip(col,row){
//Flip the value of a given column and row for a 2D array from 0 to 255 or 255 to 0. 
//The conditions make sure that the provided column and row exist and are valid for the array.
// If not, there are no operations.


  if(checkValid(row,col)){
    griddata[col][row] = ! griddata[col][row];
  }
}

function activesquare(){
   // An expression to run each frame to determine where the mouse currently is.
  mousepostion = [];
  let x,y;
  x = int(mouseX/ rectWidth);
  y = int(mouseY/rectHeight);
  mousepostion.push([x,y]);

  if(checkValid(x-1, y))mousepostion.push([x-1,y]);
  if(checkValid(x+1, y))mousepostion.push([x+1,y]);
  if(checkValid(x, y-1))mousepostion.push([x,y-1]);
  if(checkValid(x, y+1))mousepostion.push([x,y+1]);
}

function drawgrid(){
  //Create a square grid by filling it with a color based on the data stored in the 2D array.

  for (let x = 0; x < numscols; x++){
    for(let y = 0; y < numsrows; y++){
      if(griddata[y][x] ===  true) fill(0);
      else fill(255);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
  fill(0, 155,0,100);
  for(let i of mousepostion){
    rect(i[0]*rectWidth, i[1]*rectHeight, rectWidth, rectHeight);
  }
}

function checkForWin(){
  // checking if all of the items in griddata are the same
  let first = griddata[0][0];
  for(let i = 0; i < numsrows; i++)
    for(let j = 0; j < numscols; j++)
      if(griddata[i][j] !==first) return false;
  
  won[1] = first?255:0;
  return true;
}

function checkValid(x,y){
  // checking if in bounds
  if(x >= 0 && x <= numsrows && y >= 0 && y <= numscols){
    return true;
  }
  else return false;
}