class Bar {

  constructor(x, h){
    this.x = x;
    this.w = 80;
    this.h = h;
    this.y = 800 - this.h;
    this.clr = color(250, 218, 221);
  }

  run() {
    this.render();

  }

  render() {
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
  }

}
