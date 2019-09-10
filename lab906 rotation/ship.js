class Ship {
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.id = id;
   this.acc = createVector(0,0);
   this.angle = 0;
   this.clr = color(random(255), random(255), random(255));

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.loc.x = width; //when it hits side, warps to come out of other side
    }
    if(this.loc.x > width){
      this.loc.x = 0;

    }
    if(this.loc.y < 0){
      this.loc.y = height;//when it hits side, warps to come out of other side
    }
    if(this.loc.y > height){
      this.loc.y = 0;

    }
  }

update(){
  this.vel.add(this.acc);
  this.vel.limit(2);
  this.loc.add(this.vel);
}

render(){
  fill(this.clr);
  this.angle = this.loc.heading();
  //this.angle + 0.1;
  push();
  translate(this.loc.x, this.loc.y);
  rotate(this.angle);
  triangle(-5, 8, 5, 8, 0, -8);
  pop();
}

}
