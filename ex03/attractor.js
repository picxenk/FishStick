class Attractor {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.power = 800;
    this.angle = 0;
  }

  move() {
    this.angle += 0.02;
    this.position.x = width / 2 - 150 * cos(this.angle);
    this.position.y = height / 2 - 150 * sin(this.angle);
  }

  pull(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }

  show() {
    fill(0);
    circle(this.position.x, this.position.y, 16);
  }
}