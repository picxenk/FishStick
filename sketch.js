// GUI
let gui;

let params = {
  effortValue : 3,
  effortValueMin : 0,
  effortValueMax : 40,
  effortValueStep : 1,
  tColor : [50, 50, 50],
  // tChoice : ['apple', 'banana', 'mango']
}

// One ParticleSystem
let emitter;

// repellers & attractors
let isShowing = false;
let repellers = [];
let attractors = [];

let bars = [0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
  createCanvas(400, 600);
  noStroke();
  emitter = new Emitter(width / 2, 50);
  setRepelAttract();
  
  
  
  gui = createGui('for debugging');  
  gui.addObject(params);
  gui.setPosition(0, 0);


}

function draw() {
  background(255);
  fill(0);
  triangle(0, 0, width/2, 50, width, 0);

  // show bars
  for (let i=0; i<8; i++) {
    let barHeight = bars[i];
    let barStart = height - barHeight;
    fill(0);
    rect(0+50*i, barStart, 50, barHeight);
  }
    
  for (let i=0; i<params.effortValue; i++) {
    emitter.addParticle(params.tColor);  
  }
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  
  //Applying the repellers and attractors
  for (let repel of repellers) {
    emitter.applyRepeller(repel);
  }
  for (let att of attractors) {
    emitter.applyAttractor(att);
  }

  emitter.run(bars);

  if (isShowing) {
    for (let repel of repellers) {
      repel.show();
    }
    for (let att of attractors) {
      att.show();
    }
  }


}

function setRepelAttract() {
  for (let i=0; i<2; i++) {
    let repel = new Repeller(random(width), random(200, height-100));
    repel.power = random(5, 50);
    let att = new Attractor(random(width), random(200, height-100));
    att.power = random(5, 50);
    
    repellers.push(repel);
    attractors.push(att);
  }
}

function keyPressed() {

  if (key == " ") {
    setRepelAttract();
  } else if (key == "q") {
    isShowing = !isShowing;
  }
}
