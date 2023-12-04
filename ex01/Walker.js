class Walker {
  
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector();
  	this.w = 10;
  }
  
  update() {
    // 새로운 속도 만들기
    this.vel = p5.Vector.random2D();
    
    
    // 새 위치(벡터) = 이전 위치(벡터) + 속도(벡터)
    this.pos.add(this.vel);
  }
  
  display() {
	ellipse(this.pos.x, this.pos.y, this.w);
  }
}