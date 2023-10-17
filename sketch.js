let ball;


function setup() {
  createCanvas(200, 400); 
  ball = new Walker();
}


function draw() {
  background(220, 5);
  ball.update();
  ball.display();
}