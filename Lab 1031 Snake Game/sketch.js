//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var snake = [];
var gameState = 1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(114, 100, 100);
  frameRate(10);
  loadSnakes(1);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    gameMode();
  }else if(gameState === 3){
    endGame();
  }else if(gameState === 4){
    instructions();
  }
  for(var i = 0; i < 1; i++) {
    snake[i].run();
  }
}

function loadSnakes(n) {
  for(var i = 0; i < n; i++) {
    snake[i] = new Snake(20, 20, 15, 15);
  }
}

function startGame() {
  clear();
  background(5, 5, 5);
  textSize(90);
  fill(255, 255, 255);
  text('The Snake Game', 30, 200);
}
