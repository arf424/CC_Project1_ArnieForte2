// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with p5.Vector!

class Ball {
  constructor() {
    this.position = new createVector(0, 0);
    this.velocity = new createVector(1, 1);
  }

  update() {
    // Add the current speed to the position.
    this.position.add(this.velocity);
    if ((this.position.x > 72) || (this.position.x < -72)){
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > 47) || (this.position.y < -47)){
      this.velocity.y = this.velocity.y * -1;
    }
  }
  display() {
    // Display circle at x position
    noStroke();
    fill(255);
    rect(this.position.x, this.position.y, 4, 4);
  }
}