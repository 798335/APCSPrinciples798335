//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y, x1, y1, x2, y2;
var speedX, speedY;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  speedX = 1;
  speedY = 2;
  x = 20;
  y = 20;
  x1 = 50;
  y1 = 70;
  x2 = 120;
  y2 = 120;

}

//  The draw function is called @ 30 fps
function draw() {
  x = x + speedX;
  y = y + speedY;
  x1 = x1 + speedX;
  y1 = y1 + speedY;
  x2 = x2 + speedX;
  y2 = y2 + speedY;

  fill(255, 255, 255);
  ellipse(x, y, 25, 25);
  fill(255, 0, 0);
  ellipse(x1, y1, 25, 25);
  fill(0, 255, 0);
  ellipse(x2, y2, 25, 25);
  if(x < 0) {
    speedX = -speedX;
  }
  if(x1 < 0) {
    speedX = -speedX;
  }
  if(x2 < 0) {
    speedX = -speedX;
  }
  if(y < 0) {
    speedY = -speedY
  }
}
