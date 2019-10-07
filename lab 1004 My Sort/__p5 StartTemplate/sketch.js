//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var list = [5, 9, 3, 7, 4];
  swap(list, 0, 1);
  console.log(list);
  swap(list, 1, 2);
  console.log(list);
  swap(list, 2, 3);
  console.log(list);
  swap(list, 3, 4);
  console.log(list);
  function swap(list, a, b) {
    if(a > b) {
      var temp = list[a];
      list[a] = list[b];
      list[b] = temp;
    }
  }
}

//  The draw function is called @ 30 fps
function draw() {

}
