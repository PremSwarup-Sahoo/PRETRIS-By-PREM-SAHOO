class Boundary {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    let options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x+w/2, y+h/2, w, h, options);
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    fill(111,113,123);
    stroke(189,189,190)
    strokeWeight(6)
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}