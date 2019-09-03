//Gabrielle Melmamed
//August 28, 2019

class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,1);
    this.clr = color(random(255), random(255), random(255));
    this.id = id;

  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
  }

  update(){
    //this.clr = color(random(255), random(255), random(255));
    //this.x = this.x + this.dx;
    //this.y = this.y + this.dy;
    var distToMainBall;
    if(this.id >= 0){
      this.acc = p5.Vector.sub(this.loc, mainBall.loc);
      this.acc.normalize();
      this.acc.mult(0,1);
    }
    if(distToMainBall < 150){
      this.acc = p5.Vector.sub(this.loc, mainBall.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
    }
    //this.vel.add(this.acc);
    //this.loc.add(this.vel);

  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 11, 11);
    //fill(this.clr);
    //rect(this.x, this.y, this.width, this.width);
    //fill(this.clr);
    //triangle(this.x, this.y, 50, 50, 100, 100);
  }
}// end ball class
