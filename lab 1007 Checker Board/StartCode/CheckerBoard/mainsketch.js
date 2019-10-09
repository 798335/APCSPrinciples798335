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
  loadSquares();//calls the function that makes the squares appear
}


function loadSquares(){
  for(var i = 0; i < 8; i++) {
    x = 0;//resets square's x position to column 1
    var color1 = color(255, 0, 0);
    var color2 = color(0, 255, 0);//set square colors
    var h = i % 2;
    if(h === 0){//checks if row is even
      var temp = color1;
      color1 = color2;
      color2 = temp;//swaps the square colors
    }
  for(var j = 0; j < 8; j++){//draws 1 row with alternating color squares
    var z = j % 2;
    if(z > 0){//checks if squares column is odd
      squares[j] = new Square(x, y, color1)
      squares[j].render();//draws each square
    }else{//if column is not odd, change the color of the square
      squares[j] = new Square(x, y, color2)
      squares[j].render();
    }
    x = x + 100;//advances square's x position to next column
  }
    y = y + 100;//advamces square's y position to next row
}

}
