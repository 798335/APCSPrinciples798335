//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function is called once when your program begins
var paddle;
var balls = [];
var moreBalls = [];
var gameState = 1;
var score = 0;
var gameLevel;
var lives = 5;

//create canvas and background

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //fill(200, 30, 150);
  makeButtons();
}
//function drawPaddle() {
  //paddle = new Paddle(250, 700, 300, 25);
  //Paddle.run();
//}

//  The draw function is called automatically @ 30 fps

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

function makeButtons() {

}

//start screen of gameMode
//displays buttons with different levels the player can choose from

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
      // if(score < 10) {
      //   loadBalls(10);
      // }
      //easyMode();
    }
    if(gameLevel==='medium'){
      loadBalls(50);
      // if(score < 50) {
      // loadBalls(50);
      // }
      //mediumMode();
    }
    if(gameLevel==='hard'){
      loadBalls(200);
    // if(score < 200) {
    //   loadBalls(200);
    //   }
      //hardMode();
    }
    gameState = 2;
  }
}

//when all of the balls have been collected for a level, screen switches to gameState 3

function gameMode(){
//displays a score in the game screen

    fill(255, 0, 0);
    textSize(35);
    text('score:' + score, 30, 30);
    text('lives:' + lives, 30, 70);

//drops the balls down from the top and displays the paddle
    runBalls();
    if(score === balls.length + score) {
      gameState = 3;
    }
    if(lives === 0) {
      gameState = 3;
    }
  }

function endGame() {
    clear();
    background(5, 5, 5);
    if(score === balls.length + score)  {
      textSize(100);
      fill(255, 10, 10);
      text('YOU WIN!!!', 130, 500);
    }
    if(lives === 0) {
      fill(255, 0, 0);
      textSize(100);
      text('YOU LOST!', 120, 400);
    }
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
        score = 0;
        gameState = 1;
        balls = [];
        gameLevel = '';
        // startGame();

        //   gameState = 1;
        //   balls = [];
        //   score = 0;
        //   gameLevel = '';
        }

      if(mouseIsPressed &&
        mouseX > 200 &&
        mouseX < 300 &&
        mouseY > 110 &&
        mouseY < 210) {
          remove();
          //clear();
          //background(5, 5, 5);
          //fill(255, 0, 0);
          //textSize(70);
          //text('THE GAME IS OVER!', 200, 300);
        }
}//after the player has collected all of the balls in their level, their screen will change to This
//allows player to play game again or quit

function loseGame() {
  clear();
  background(5, 5, 5);
  fill(255, 0, 0);
  textSize(70);
  text('YOU LOST!', 200, 400);
  endGame();
}

function loadBalls(x) {
  paddle = new Paddle(250, 700, 300, 25);
  for(var i = 0; i < x; i++){
    balls[i] = new Ball(random(0, 800), random(0, 100), 5, 5);
  }
}

// // function addBalls(x) {
// //   for(var i = 0; i < x; i++){
// //     var moreBalls[i] = balls.push(new Ball(random(0, 800), random(0, 100), 5, 5));
// //   }
// }

function runBalls(x) {
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
