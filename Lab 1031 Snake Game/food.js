class Food {
  constructor(x, y){
    this.food = createVector(x, y)
    this.w = 30;
    this.h = 30;
    this.clr = color(255, 0, 0);
  }

  run() {
    this.render();
    this.update();
  }

  render() {
    fill(this.clr);
    rect(this.food.x, this.food.y, this.w, this.h);
  }

  update() {
    if(this.food.x === Snake.head.x &&
      this.food.x + 30 === Snake.head.x &&
      this.food.y === Snake.head.y &&
      this.food.y + 30 === Snake.head.y &&
      Snake.head.x + 15 === this.food.x &&
      Snake.head.y + 15 === this.food.y &&
      Snake.head.x + 15 === this.food.x + 30 &&
      Snake.head.y + 15 === this.food.y + 30){
        this.clr = color(5, 5, 5);
        fill(255, 0, 0);
        food.push(new Food(random(100, 700), random(100, 700)));
        //this.food.x = random(100, 700);
        //this.food.y = random(100, 700);
      }
  }
}
