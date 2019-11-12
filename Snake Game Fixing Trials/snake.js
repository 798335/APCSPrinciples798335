class Snake {
  constructor(x, y, w, h) {
    this.head = createVector(x, y);
    this.w = w;
    this.h = h;
    this.body = [];
    this.vel = createVector(0, 0);
    //this.clr = color(255, 0, 0);
  }

  run() {
    this.renderhead();
    this.update();
  }

  renderhead() {
    fill(255, 97, 181);
    rect(this.head.x, this.head.y, this.w, this.h);
  }

  renderbody() {
    for(var i = this.body.length - 1; i >= 0; i--){
      fill(255, 97, 181);
      rect(this.body[i].x, this.body[i].y, this.w, this.h);
    }
  }

  update() {
    this.keyReleased();
    for(var i = this.body.length - 1; i >= 0; i--){
        this.body[i].x = this.head.x + 15;
        this.body[i].y = this.head.y + 15;
        this.renderbody();
    }
    this.head.add(this.vel);

  }

  keyReleased() {
  if(keyCode === UP_ARROW) {
    this.vel.x = 0;
    this.vel.y = -5;
    //this.head.y = this.head.y - this.h;
  }
  if(keyCode === DOWN_ARROW) {
    this.vel.x = 0;
    this.vel.y = 5;
    //this.head.y = this.head.y + this.h;
    }
  if(keyCode === LEFT_ARROW) {
    this.vel.x = -5;
    this.vel.y = 0;
    //this.head.x = this.head.x - this.w;
  }
if(keyCode === RIGHT_ARROW) {
  this.vel.x = 5;
  this.vel.y = 0;
  //this.head.x = this.head.x + this.w;
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
