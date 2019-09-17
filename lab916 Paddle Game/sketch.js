//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var paddle;
var balls = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  drawPaddle();
  loadBalls(10);

}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 50);
  runPaddle();
  runBalls();
}

function drawPaddle() {
  paddle = new Paddle(250, 700, 300, 100);
}

function loadBalls(x) {
  for(var i = 0; i < x; i++){
    balls[i] = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  }
}

function runPaddle() {
  paddle.run();
}

function runBalls() {
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}
