//  Gabby Melamed
// 	Lab 1023 Sort Bars
//  This is a comment
//  The setup function function is called once when your program begins

var list = [];
var bars = [];
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
  loadList(10);//loads an unsorted list of numbers
  //showBars();//displays bars on the screen with heights that are in order of the array of numbers
  // console.log(list);
}

function draw() {
  bubbleSort();
  //console.log(list);
}

function bubbleSort() {
  for(var i = 0; i < list.length; i++){
    for(var j = 0; j < list.length; j++){
      if(list[j] > list[j + 1]){
        swap(list, j, j + 1);
        background(5, 5, 5);
        //frameRate(10);
        //swap(bars, j, j + 1);
        //wait(300);
        showBars(list);
        console.log(list);
        //clear();
        }
    }
  }
  //console.log(list);
}

function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}


function showBars(list) {//makes all of the bars appear with a fixed width and a height accodring to the vallue of that number index in the array
  console.log("showBars start");
  var xpos = 0;
  var bars = [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10];
  var bar1 = new Bar(xpos, list[0] * 80);
  var bar2 = new Bar(xpos + 80, list[1] * 80);
  var bar3 = new Bar(xpos + (80 * 2), list[2] * 80);
  var bar4 = new Bar(xpos + (80 * 3), list[3] * 80);
  var bar5 = new Bar(xpos + (80 * 4), list[4] * 80);
  var bar6 = new Bar(xpos + (80 * 5), list[5] * 80);
  var bar7 = new Bar(xpos + (80 * 6), list[6] * 80);
  var bar8 = new Bar(xpos + (80 * 7), list[7] * 80);
  var bar9 = new Bar(xpos + (80 * 8), list[8] * 80);
  var bar10 = new Bar(xpos + (80 * 9), list[9] * 80);
  bar1.render();
  bar2.render();
  bar3.render();
  bar4.render();
  bar5.render();
  bar6.render();
  bar7.render();
  bar8.render();
  bar9.render();
  bar10.render();
  console.log("showBars finish");
}

function swap(list, a, b) {//swaps two numbers in an array
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
