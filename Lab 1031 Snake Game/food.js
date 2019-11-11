
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
    var i = 0;
//snake vs. food collision

    if(snake[i].head.x + 15 >= this.food.x &&
        snake[i].head.x <= this.food.x + this.w &&
        snake[i].head.y + 15 >= this.food.y &&
        snake[i].head.y <= this.food.y + this.h)
        {
        //this.clr = color(5, 5, 5);
        //fill(255, 0, 0);
        //food.push(new Food(random(100, 700), random(100, 700)));
        //console.log('snake hit food');
        this.food.x = random(100, 700);
        this.food.y = random(100, 700);
        this.render();
      }
    }
  }
