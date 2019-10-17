//  Gabby Melamed
// 	Lab 1017 Insertion Sort
//  This is a comment
//  The setup function function is called once when your program begins

var list = [];
var temp;
function loadList(n){
  for(var i = 0; i < n; i++){//keeps adding numbers onto the array until i < n, the number of items in the array
    list.push(int(random(0, 10)));//pushes a random integer between 0 and 1000 into the array
  }
}//function generates a random array with as many numbers as the input is


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(10000);
  console.log(list);
  for(var i = 1; i < list.length; i++){
    for(var j = 1; j > 0; j--){
      if(list[j] < list[j - 1]){
        swap(list, j, j - 1);
      }
    }
  }
console.log(list);
}
//console.log(list);


function swap(list, a, b) {//swaps two variables
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}



//  The draw function is called @ 30 fps
//function draw() {
////
//}
