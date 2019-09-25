//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var paddle;
var balls = [];
var gameState = 1;
var score = 0;
var gameLevel;
var moreBalls;
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
  clear();
  background(5, 5, 5);
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
      }else if(mouseX > 270 &&
      mouseX < 370 &&
      mouseY > 600 &&
      mouseY < 700) {
        gameLevel = 'medium';
    }else if(mouseX > 420 &&
      mouseX < 520 &&
      mouseY > 600 &&
      mouseY < 700) {
        gameLevel = 'hard';
    }
    if(gameLevel === 'easy'){
      loadBalls(10);
      if(moreBalls === 'yes') {
      loadBalls(20);
      }
      //easyMode();
    }
    if(gameLevel==='medium'){
      loadBalls(50);
      //mediumMode();
    }
    if(gameLevel==='hard'){
      loadBalls(200);
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
      if (score === 10 &&
        gameLevel === 'easy') {
        gameState = 3;
      }
      if (score === 50 &&
        gameLevel === 'medium') {
        gameState = 3;
      }
      if (score === 200 &&
        gameLevel === 'hard') {
        gameState = 3;
      }
  }

function endGame() {
    clear();
    background(5, 5, 5);
    textSize(100);
    fill(255, 10, 10);
    text('YOU WIN!!!', 130, 500);
    fill(50, 50, 50);
    rect(500, 110, 100, 100);
    rect(200, 110, 100, 100);
    textSize(18);
    fill(0, 255, 0);
    text('Play Again?', 505, 150);
    text('End Game?', 205, 150);
      if(mouseIsPressed &&
        mouseX > 500 &&
        mouseX < 600 &&
        mouseY > 110 &&
        mouseY < 210) {
          gameState = 1;
        }

      if(mouseIsPressed &&
        mouseX > 200 &&
        mouseX < 300 &&
        mouseY > 110 &&
        mouseY < 210) {
          gameState = 4;
          //clear();
          //background(5, 5, 5);
          //fill(255, 0, 0);
          //textSize(70);
          //text('THE GAME IS OVER!', 200, 300);
        }
    //add code to change back to startgame or exit the game
}

function playAgain() {
  clear();
  background(5, 5, 5);
  fill(255, 0, 0);
  textSize(70);
  text('THE GAME', 200, 400);
  text('IS OVER!', 220, 500);
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
  } else if(gameState === 4) {
    playAgain();
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
