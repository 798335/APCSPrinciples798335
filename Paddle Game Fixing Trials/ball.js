//Gabrielle Melmamed
//August 28, 2019
class Ball {
  constructor(x, y, dx, dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));

  }

//runs all of the ball functions

  run(){
    this.render();
    this.checkedges();
    this.update();
//    this.isColliding();
  }

//makes each ball bounce when it reaches any edge of the canvas
//changes x velocity to the opposite sign when it hits the left or right
//changes y velocity to the opposite sign when it hits the top or bottom

  checkedges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
      //this.loc.x = width; //when it hits side, warps to come out of other side
    }

    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
      //this.loc.x = 0;
    }

    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
      //this.loc.y = height;//when it hits side, warps to come out of other side
    }

    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      //this.loc.y = 0;

    }
  }

//deletes a ball out of the array everytime it hits the paddle coming down only
//increases the score by 1 when the ball hits the paddle

  update(){
    for(var i = balls.length - 1; i >= 0; i--) {
      if(balls[i].isColliding() && this.vel.y > 0) {
          balls.splice(i, 1);
          score = score + 1;
          // if (balls.length === 0) {
          //   gameState = 3;
          // }
        } else if(balls[i].isColliding() && this.vel.y < 0) {
          if(gameLevel==='easy') {
            loadBalls(10*2);
          }
          if(gameLevel==='medium') {
            loadBalls(50*2);
          }
          if(gameLevel==='hard') {
            loadBalls(200*2);
          }
        }

      //if(balls[i].isColliding() && this.vel.y > 0) {
          //score = score - 1;
        //}
      //else if(balls[i].isColliding()) {
        //score = score - 1;
        //this.vel.y = -this.vel.y;
      //}
}

    //makes the velocity have a limit so the balls don't get too fast

    this.vel.limit(10);
    this.vel.add(this.acc);
    this.loc.add(this.vel);

   //keeps velocity the same for the easiest level

   if(gameLevel === 'easy') {
     this.vel.x = this.vel.x * 1;
     this.vel.y = this.vel.y * 1;
   }

   //makes the balls faster so that it is harder

   if(gameLevel === 'medium') {
     this.vel.x = this.vel.x * 1.5;
     this.vel.y = this.vel.y * 1.5;
   }

   //makes the balls even faster than medium

   if(gameLevel === 'hard') {
     this.vel.x = this.vel.x * 2;
     this.vel.y = this.vel.y * 2;
   }

  }

//makes the ball know when it hits the paddle

  isColliding() {
    if(this.loc.x + 13 > paddle.loc.x &&
        this.loc.x - 13 < paddle.loc.x + paddle.w &&
        this.loc.y + 13 > paddle.loc.y &&
        this.loc.y - 13 < paddle.loc.y + paddle.h)
        {
          return true;
          //this.vel.y = -this.vel.y;
        } else {
          return false;
        }
      }

//creates the ball

  render(){
    fill(this.clr);
    ellipse (this.loc.x, this.loc.y, 26, 26);
  }

}//  +++++++++++++++++++++++++++++++++++  End Ball Class
