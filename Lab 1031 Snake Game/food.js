class Food {
  constructor(x, y){
    this.food = createVector(x, y);
    this.w = 30;
    this.h = 30;
  }

  run() {
    this.render();
    //this.update();
  }

  render() {
    fill(84, 255, 84);
    rect(this.food.x, this.food.y, this.w, this.h);
  }

  update() {
    if(this.food.x === this.snake.x &&
      this.food.x+30 === this.snake.x)
  }
}
