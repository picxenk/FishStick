class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    //{!1} How strong is the repeller?
    this.power = 50;
  }
  
  move(value) {
    this.position.y -= value;
  }
  
  setPower(value) {
    this.power = map(value, 0, width, -300, 300);
  }

  show() {
    noStroke();
    fill(240, 150, 150);
    circle(this.position.x, this.position.y, 20);
  }

  pull(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
