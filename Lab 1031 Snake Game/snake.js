class Snake {

  constuctor(x, y){
    this.loc = createVector(x, y);
    this.clr = color(255, 105, 180);

  }

  run() {
    this.render();
    this.update();
  }

  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 15, 15);
  }

  update() {

  }

  //keyPressed() {
    //if(keyCode === UP_ARROW) {
      //this.loc.add(this.loc.x+15)
    //}
  //}
}
