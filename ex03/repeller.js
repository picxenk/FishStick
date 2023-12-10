class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 400;
    this.angle = 0;
    this.speed = 0;
    this.synth = new p5.MonoSynth();
    this.c = 0;
  }

  setPower(value) {
    this.power = value;
  }

  setSpeed(value) {
    this.speed = value;
  }

  move() {
    this.angle += this.speed;
    this.position.x = width / 2 + 150 * cos(this.angle);
    this.position.y = height / 2 + 150 * sin(this.angle);
  }

  show() {
    fill(this.c);
    circle(this.position.x, this.position.y, 32);
  }

  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    if (distance < 20) {
      this.c = color(random(0, 255), random(0, 255), random(0, 255));
      let tones = ["C3", "E3", "G3", "C4", "E4", "G4", "C6", "D6", "E6"];
      this.synth.triggerAttack(random(tones));
      this.synth.triggerRelease(random(0.1, 0.8));
    }
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}