
class Paddle {
  constructor(x,y) {
    this.w = 5;
    this.h = 25;
    this.x = x;
    this.y = y;
    this.vel_x = 0;
    this.vel_y = 5;

    this.ydir = 0;
  }

  update() {
    // Add the current speed to the position.
    if ((this.y + (this.h/2) >= 47 )|| (this.y - (this.h/2) <= -47)){
      this.setDir(0);
    }
    this.y = this.y + this.ydir; 
  }

  setDir(dir){
    this.ydir = dir;
  }

  display() {
    // Display circle at x position
    noStroke();
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}