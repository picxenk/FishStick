class Mover {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
    }
  
    applyForce(force) {
      this.acceleration.add(force);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration = createVector(0, 0);
      this.velocity.mult(0.5);
  
      if (this.position.x < 0) {
        this.position.x = width;
      }
      if (this.position.x > width) {
        this.position.x = 0;
      }
      if (this.position.y < 0) {
        this.position.y = height;
      }
  
      if (this.position.y > height) {
        this.position.y = 0;
      }
    }
  
    show() {
      fill(0);
      circle(this.position.x, this.position.y, 1);
    }
  }