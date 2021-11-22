class Rock {

  constructor(x, y, r) {
    this.r = r;
    let options = {
      // angle: random(TWO_PI),
      // friction: 0,
      // restitution: 0
    }
    this.body = Bodies.circle(x, y, r, options);
    //this.body.angle = PI / 2;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    fill(255);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipse(0, 0, this.r*2);
    pop();
  }


}