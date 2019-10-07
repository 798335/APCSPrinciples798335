

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/

class Square {
  //  Add perameters to your constructor function
  constructor(x, y, clr) {
    this.x = x;
    this.y = y;
    this.clr = clr;

  }

  render() {
    rect(this.x, this.y, 100, 100);
  }
  //function Sqr(){
  //  Add instance variables to your constructor Function
  //What does a square need to know about itself??

    //this.render = function(){

    //}

  }//  End of Square constructor function
}
