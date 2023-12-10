let emitter;
let repeller;

let gui;

let params = {
  rotatespeed: 0.01,
  rotatespeedMin: -0.05,
  rotatespeedMax: 0.05,
  rotatespeedStep: 0.005,
  particlevalue: 3,
  particlevalueMin: 0,
  particlevalueMax: 7,
  particlevalueStep: 0.5,
  repellerpower: 400,
  repellerpowerMin: 0,
  repellerpowerMax: 1000,
  repellerpowerStep: 10
};

function setup() {
  createCanvas(500, 500);

  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, height / 2);

  gui = createGui("test slider");

  gui.addObject(params);
  gui.setPosition(510, 10);
}

function draw() {
  background(255);
  repeller.setPower(params.repellerpower);
  repeller.setSpeed(params.rotatespeed);
  repeller.move();

  for (let i = 0; i < params.particlevalue; i++) {
    emitter.addParticle();
  }

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.run();

  repeller.show();
}