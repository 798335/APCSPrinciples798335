//Gabrielle Melmamed
//August 28, 2019

class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,1);
    this.clr = color(random(255), random(255), random(255));
    this.id = id;
    this.w=15
    if(this.id<0){
      this.w=50
    }

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
      this.loc.y = height - 2;
    }
  }

  update(){
    //this.clr = color(random(255), random(255), random(255));
    //this.x = this.x + this.dx;
    //this.y = this.y + this.dy;
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    var distToMainBall;
    if(this.id >= 0){
      distToMainBall = this.loc.dist(mainBall.loc);
      if(distToMainBall < 250){
        this.acc = p5.Vector.sub(mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0,1);
        }
        if(distToMainBall < 150){
          this.acc = p5.Vector.sub(this.loc, mainBall.loc);
          this.acc.normalize();
          this.acc.mult(0.5);
        }

    }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
    //fill(this.clr);
    //rect(this.x, this.y, this.width, this.width);
    //fill(this.clr);
    //triangle(this.x, this.y, 50, 50, 100, 100);
  }
}// end ball class
