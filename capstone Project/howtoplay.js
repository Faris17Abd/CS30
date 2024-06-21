function setup(){
    createCanvas(windowWidth, windowHeight);
}
 
function draw(){ // how to play
    background(220)
    textSize(32);
    text('How To Play Single Player:', 0, 30);
    text('Right arrow to move right.', 0, 60);
    text('Left arrow to move left.', 0, 90);
    text('Down arrow to move down.', 0, 120);
    text('Up arrow rotates right.', 0, 150);
    text('Press C to hold blocks.', 0, 180);
    text('Press Space to instant drop.', 0 , 210);
    text('You level up for every  10 lines you cleared * the level you currently are.', 0, 240);
    text('How To Play VS:',0, 270);
    text('WASD for player 1, Arrow keys for player 2.', 0, 300);
    text('Press C to hold as player 1, press O to hold as player 2.', 0, 330);
    text('Press V to instand drop as player 1, press P to instant drop as player 2.', 0, 360);
    text('The winner is whoever got the most lines cleared.',0,390);
}