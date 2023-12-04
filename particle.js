// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-0.2, 0.2), random(0.3));
    this.acceleration = createVector(0, 0);
    this.lifespan = 400.0;
    this.c = color(0);
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  checkBottom(bars) {
    if (this.position.y >= height) {
      let i = floor(this.position.x/100);
      bars[i] += 0.002 ;
    }
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
    noStroke();
    fill(this.c, this.lifespan);
    circle(this.position.x, this.position.y, 2);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
