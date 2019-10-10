//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
//function setup() {
  //var cnv = createCanvas(800, 800);
  //cnv.position((windowWidth-width)/2, 30);
  //background(5, 5, 5);
  //fill(200, 30, 150);
var list = [3, 5, 4, 9, 7, 1];//creates the array
console.log(list);

function swap(list, a, b) {
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

for(var i = 0; i < list.length; i++){
  for(var j = 0; j < list.length; j++){
    if(list[j] > list[j + 1]){
      swap(list, j, j + 1);
      }
  }
}
console.log(list);
