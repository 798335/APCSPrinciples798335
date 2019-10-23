//  Gabby Melamed
// 	Lab 1015 Bubble Sort 2.0
//  This is a comment
//  The setup function function is called once when your program begins

var list = [];
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
  showBars();
  loadList(10);
  console.log(list);
  for(var i = 0; i < list.length; i++){
    for(var j = 0; j < list.length; j++){
      if(list[j] > list[j + 1]){
        swap(list, j, j + 1);
        }
    }
  }
  console.log(list);
}

function showBars() {
  var bar1 = new Bar(0, list[5], list[5]);
  bar1.run();
}

function swap(list, a, b) {
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
