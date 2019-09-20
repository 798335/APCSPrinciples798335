class Paddle {
  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    //this.loc2 = createVector(w, h);
    this.clr = color(random(255), random(255), random(255));
  }

  run() {
    this.render();
    this.update();

  }
  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  update() {
    var paddleMouseLoc = createVector(mouseX, 700);
    this.loc = p5.Vector.lerp(this.loc, paddleMouseLoc, 0.09);
  }
}

//var paddlewidth;
//var paddleheight;
//paddlewidth = this.loc2.x;
//paddleheight = this.loc2.y;
