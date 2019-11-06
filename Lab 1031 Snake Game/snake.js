class Snake {
  constructor(x, y, w, h) {
    this.snake = createVector(x, y);
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
    rect(this.snake.x, this.snake.y, this.w, this.h);
  }

keyReleased() {
  if(keyCode === UP_ARROW) {
    this.snake.y = this.snake.y - this.h;
  }
  if(keyCode === DOWN_ARROW) {
    this.snake.y = this.snake.y + this.h;
    }
  if(keyCode === LEFT_ARROW) {
    this.snake.x = this.snake.x - this.w;
  }
if(keyCode === RIGHT_ARROW) {
  this.snake.x = this.snake.x + this.w;
  }
}

  checkEdges() {
    if(this.snake.x > 800 ||
      this.snake.x < 0 ||
      this.snake.y > 800 ||
      this.snake.y < 0){
        gameState = 3;
      }
  }
}
