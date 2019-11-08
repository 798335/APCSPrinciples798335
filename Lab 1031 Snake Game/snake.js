class Snake {
  constructor(x, y, w, h) {
    this.head = createVector(x, y);
    this.w = w;
    this.h = h;
    //this.clr = color(255, 0, 0);
  }

  run() {
    this.update();
    this.render();
  }

  update() {
    this.keyReleased();
  }

  render() {
    fill(255, 97, 181);
    rect(this.head.x, this.head.y, this.w, this.h);
  }

keyReleased() {
  if(keyCode === UP_ARROW) {
    this.head.y = this.head.y - this.h;
  }
  if(keyCode === DOWN_ARROW) {
    this.head.y = this.head.y + this.h;
    }
  if(keyCode === LEFT_ARROW) {
    this.head.x = this.head.x - this.w;
  }
if(keyCode === RIGHT_ARROW) {
  this.head.x = this.head.x + this.w;
  }
}

  checkEdges() {
    if(this.head.x > 800 ||
      this.head.x < 0 ||
      this.head.y > 800 ||
      this.head.y < 0){
        gameState = 3;
      }
  }
}
