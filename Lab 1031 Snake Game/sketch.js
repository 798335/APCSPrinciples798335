//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var snake = [];
var food;
var gameState = 1;
var buttonStart;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(114, 100, 100);
  frameRate(10);
  loadObjects(1);
  //makeButtons();
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  for(var i = 0; i < snake.length; i++) {
    snake[i].run();
  }
  food.run();
  //if(gameState === 1){
    //startGame();
  //}else if(gameState === 2){
    //gameMode();
  //}else if(gameState === 3){
    //endGame();
  //}//else if(gameState === 4){
    //instructions();
  //}
}

//function startGame() {
  //clear();
  //background(5, 5, 5);
  //textSize(90);
  //fill(255, 255, 255);
  //text('The Snake Game', 30, 200);
  //buttonStart.run();
  //if(mouseIsPressed) {
    //if(mouseX > 450 &&
    //mouseX < 300 &&
    //mouseY > 450 &&
    //mouseY < 300){
      //gameState = 2;
    //}
  //}
//}

//function gameMode() {
  //clear();
  //background(5, 5, 5);
  //loadSnakes(1);
  //for(var i = 0; i < snake.length; i++) {
    //snake[i].run();
  //}
//}

function loadObjects(n) {
  for(var i = 0; i < n; i++) {
    snake[i] = new Snake(20 + i, 20 + i, 15, 15);
    food = new Food(random(100, 500), random(100, 500));
  }
}

//function makeButtons() {
  //buttonStart = new Button(350, 350, 'START GAME');
//}
