//  Gabby Melamed
// 	Lab 1015 Bubble Sort 2.0
//  This is a comment
//  The setup function function is called once when your program begins

var list = [3, 5, 4, 9, 7, 1, 81, 53, 49, 75];//creates the array
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
