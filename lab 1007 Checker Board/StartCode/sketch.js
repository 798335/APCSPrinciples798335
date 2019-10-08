/*
**Lab 1007 Ball
**Checker Board
**
*/


//  Global variables
var squares = []  // declare b1 as a global variable
var x = 0; //x position of 1st square
var y = 0; //y position of 1st square

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();
  //  traverse array and run each ball
  for(var i = 0; i < squares.length; i++){
   squares[i].render();
  }
}


function loadSquares(){
  for(var j = 0; i < 64; i++){
    squares[i] = new Square(x, y, (255, 0, 0))
    x = x + 100;
    y = y + 100;
  }

}


}
