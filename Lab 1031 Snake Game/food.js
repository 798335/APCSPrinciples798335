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
    if(this.food.x === snake.x &&
      this.food.x + 30 === snake.x &&
      this.food.y === snake.y &&
      this.food.y + 30 === snake.y &&
      snake.x + 15 === this.food.x &&
      snake.y + 15 === this.food.y &&
      snake.x + 15 === this.food.x + 30 &&
      snake.y + 15 === this.food.y + 30){
        var newfood = new Food(random(100, 700), random(100, 700));
      }
  }
}
