//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var l = [];
function loadList(n){
  for(var i = 0; i < n; i++){//keeps adding numbers onto the array until i < n, the number of items in the array
    l.push(int(random(0, 10)));//pushes a random integer between 0 and 1000 into the array
  }
}//function generates a random array with as many numbers as the input is


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

}
