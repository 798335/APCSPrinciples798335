class Paddle {
  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.loc2 = createVector(w, h);
    this.clr = color(random(255), random(255), random(255));
  }

  run() {
    this.render();

  }
  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);
  }

}
