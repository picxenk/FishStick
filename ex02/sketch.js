// 참고가 되는 책 내용은 아래와 같습니다.
// https://natureofcode.com/book/chapter-4-particle-systems/ (Processing)
// https://nature-of-code-2nd-edition.netlify.app/particles/ (p5.js)

let particleSystem;

function setup() {
  createCanvas(300, 600);
  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);
  particleSystem.run();
}

function mouseDragged(e) {
  particleSystem.origin = createVector(mouseX, mouseY);
  particleSystem.addParticle();
  return false;
}