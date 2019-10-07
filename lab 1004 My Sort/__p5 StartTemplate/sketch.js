//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var a;
var b;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var list = [9, 5, 3, 7, 4];
  console.log(list);
  //for (var i = 0; i < list.length; i++) {
//    if(list[i] < list [i + 1] && list[i + 1] < list [i + 2] && list[i + 2] < list [i + 3] && list[i + 3] < list [i + 4] && list[i + 4] < list [i + 5]) {
    //if (list[i] > list[i + 1])  {
      //swap(list, i, i + 1);
    //}

for (var i = 0; i < list.length; i++) {
  if(list[i] > list[i + 1]) {
      swap(list, i, i + 1);
    }
    console.log(list);
  }
//list[i] < list [i + 1] && list[i + 1] < list [i + 2]
  //swap(list, 1, 2);
  //console.log(list);
  //swap(list, 2, 3);
  //console.log(list);
  //swap(list, 3, 4);
  //console.log(list);
  function swap(list, a, b) {
      var temp = list[a];
      list[a] = list[b];
      list[b] = temp;
  }
}

//  The draw function is called @ 30 fps
function draw() {

}
