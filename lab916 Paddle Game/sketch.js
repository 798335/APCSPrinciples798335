//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var paddle;
var balls = [];
var gameState = 1;
var score = 0;
var gameLevel;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //drawPaddle();
  //loadBalls(10);
}

//function drawPaddle() {
  //paddle = new Paddle(250, 700, 300, 25);
  //Paddle.run();
//}

function startGame() {
  textSize(90);
  fill(255, 255, 255);
  text('The Paddle Game', 30, 300);
  rect(120, 600, 100, 100);
  rect(270, 600, 100, 100);
  rect(420, 600, 100, 100);
  rect(570, 600, 100, 100);
  textSize(25);
  fill(2550, 0, 0);
  text('easy', 145, 655);
  text('medium', 275, 655);
  text('hard', 445, 655);
  if(mouseIsPressed) {
    if(mouseX > 120 &&
      mouseX < 220 &&
      mouseY > 600 &&
      mouseY < 700) {
        gameLevel = 'easy';
      }
    if(mouseX > 270 &&
      mouseX < 370 &&
      mouseY > 600 &&
      mouseY < 700) {
        gameLevel = 'medium';
    }
    if(mouseX > 420 &&
      mouseX < 520 &&
      mouseY > 600 &&
      mouseY < 700) {
        gameLevel = 'hard';
    }
    if(gameLevel === 'easy'){
      loadBalls(10);
      //easyMode();
    }
    if(gameLevel==='medium'){
      loadBalls(5);
      //mediumMode();
    }
    if(gameLevel==='hard'){
      loadBalls(2);
      //hardMode();
    }
    gameState = 2;
  }
  }


function gameMode(){
    fill(255, 0, 0);
    textSize(35);
    text('score:' + score, 30, 30);
    runBalls();
    }

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 50);
  if (gameState === 1){
    startGame();
  } else if(gameState === 2){
    gameMode();
  } else if(gameState === 3){
    endGame();
  }

}

function loadBalls(x) {
  paddle = new Paddle(250, 700, 300, 25);
  for(var i = 0; i < x; i++){
    balls[i] = new Ball(random(width), random(height), 5, 5);
  }
}

function runBalls(x) {
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
