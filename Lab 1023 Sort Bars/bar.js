class Bar {

  constructor(x, y, h){
    this.loc = createVector(x, y);
    this.height = height;
    this.clr = color(250, 218, 221);
  }

  run() {
    this.render();

  }

  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 80, this.height);
  }

}
