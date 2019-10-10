//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
  var w, x, y, z, v, v2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  v2 = 300;
  v = 211;
  w = 185;
  x = 210;
  y = 125;
  z = 275;

}

//  The draw function is called @ 30 fps
function draw() {
  v2 = v2 + 1;
  v = v + 1;
  w = w + 1;
  x = x + 1;
  y = y + 1;
  z = z + 1;
  fill(255, 255, 255);
  rect(w, 200, 50, 50);
  ellipse(y, 100, 50, 50);
  ellipse(z, 100, 50, 50);
  fill(255, 0, 0);
  arc(x, 300, 200, 75, 0, PI);
  fill(0 , 0, 0);
  ellipse(y, 100, 25, 25);
  ellipse(z, 100, 25, 25);
  fill(0, 0, 0);
  arc(x, 305, 150, 50, 0, PI);
  fill(50, 50, 50);
  ellipse(v, v2, 25, 25);

}
