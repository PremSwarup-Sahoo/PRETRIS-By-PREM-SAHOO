class Shape {
  constructor() {
    this.x = width / 2 - 50;
    this.y = height / 2 - 200;
    this.hasFallen = "NO";
    let options = {
      friction: 1,
      restitution: 0.4,
      isStatic: true,
    };

       let  randNum = Math.round(random(1,6))
    // let randNum = Math.round(random(1, 4));
      //  let  randNum = 4

    switch (randNum) {
      case 1:
        this.w = 70;
        this.h = 70;
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        this.color = [255, 222, 0];
        this.shape = "square";
        this.strokeColor = [254, 247, 126];
        World.add(world, this.body);
        break;
      case 2:
        this.w = 100;
        this.h = 100;
        this.shape = "e";
        let x = 0;
        let y = 0;
        this.vert = [
          { x: x, y: y },
          { x: x + 20, y: y },
          { x: x + 20, y: y + 20 },
          { x: x + 50, y: y + 20 },
          { x: x + 50, y: y + 50 },
          { x: x - 30, y: y + 50 },
          { x: x - 30, y: y + 20 },
          { x: x, y: y + 20 },
          { x: x, y: y },
        ];
        this.blob = Vertices.fromPath(
          "0 0 20 0 20 25 50 25 50 50 -30 50 -30 25 0 25 0 0"
        );
        this.center = this.computeCenter(this.blob);
        this.body = Bodies.fromVertices(this.x, this.y, this.blob, options);

        this.color = [156, 131, 240];
        this.strokeColor = [192, 163, 255];
        World.add(world, this.body);
        break;
      case 3:
        this.w = 100;
        this.h = 100;
        this.shape = "l";
        let x2 = 0;
        let y2 = 0;
        this.verti = [
          { x: x2, y: y2 },
          { x: x2 + 20, y: y2 },
          { x: x2 + 20, y: y2 + 20 },
          { x: x2 + 60, y: y2 + 20 },
          { x: x2 + 60, y: y2 + 40 },
          { x: x2, y: y2 + 40 },
          { x: x2, y: y2 },
        ];

        this.blob = Vertices.fromPath("0 0  20 0 20 20 60 20 60 40 0 40 0 0");
        this.center = this.computeCenter(this.blob);
        this.body = Bodies.fromVertices(this.x, this.y, this.blob, options);
        // this.body = Bodies.fromVertices(this.x, this.y, this.verti, options);
        this.color = [0, 140, 246];
        this.strokeColor = [0, 190, 255];
        World.add(world, this.body);
        break;
        case 4:
          this.w = 100;
          this.h = 100;
          this.shape = "s";
          this.blob = Vertices.fromPath("0 0 20 0 20 30 60 30 60 75 40 75 40 45 0 45 0 0");
          this.center = this.computeCenter(this.blob);
          this.body = Bodies.fromVertices(this.x, this.y, this.blob, options);
          // this.body = Bodies.fromVertices(this.x, this.y, this.verti, options);
          this.color = [255,100,115];
          this.strokeColor = [0, 190, 255];
          World.add(world, this.body);
          break;
      default:
        this.w = 110;
        this.h = 27;
        this.shape = "rect";
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        this.color = [0, 170, 230];
        this.strokeColor = [0, 190, 255];
        World.add(world, this.body);
        break;
    }

    //   this.body = Bodies.rectangle(x, y, w, h, options);
    //   World.add(world, this.body);
  }

  show() {
    if (this.shape === "rect" || this.shape === "square") {
      let pos = this.body.position;
      let angle = this.body.angle;
      push();
      fill(this.color[0], this.color[1], this.color[2]);
      stroke(this.strokeColor[0], this.strokeColor[1], this.strokeColor[2]);
      strokeWeight(5);
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
      pop();
    }
    // if (this.shape === "e") {
    //   let pos = this.body.position;
    //   let angle = this.body.angle;
    //   push();
    //   fill(this.color[0], this.color[1], this.color[2]);
    //   stroke(this.strokeColor[0], this.strokeColor[1], this.strokeColor[2]);
    //   strokeWeight(5);
    //   translate(pos.x, pos.y);
    //   rotate(angle);
    //   rectMode(CENTER);
    //   beginShape();
    //   vertex(this.vert[0]["x"], this.vert[0]["y"] - 35);
    //   vertex(this.vert[1]["x"], this.vert[1]["y"] - 35);
    //   vertex(this.vert[2]["x"], this.vert[2]["y"] - 30);
    //   vertex(this.vert[3]["x"], this.vert[3]["y"] - 30);
    //   vertex(this.vert[4]["x"], this.vert[4]["y"] - 20);
    //   vertex(this.vert[5]["x"], this.vert[5]["y"] - 20);
    //   vertex(this.vert[6]["x"], this.vert[6]["y"] - 30);
    //   vertex(this.vert[7]["x"], this.vert[7]["y"] - 30);
    //   vertex(this.vert[8]["x"], this.vert[8]["y"] - 35);
    //   endShape(CLOSE);
    //   pop();
    // }
    if (this.shape === "l" || this.shape === "e"||this.shape==="s") {
      // let pos = this.body.position;
      // let angle = this.body.angle;
      // push();
      // fill(this.color[0], this.color[1], this.color[2]);
      // stroke(this.strokeColor[0], this.strokeColor[1], this.strokeColor[2]);
      // strokeWeight(5);
      // translate(pos.x, pos.y);
      // rotate(angle);
      // rectMode(CENTER);
      // beginShape();
      // vertex(this.verti[0]["x"], this.verti[0]["y"]);
      // vertex(this.verti[1]["x"], this.verti[1]["y"]);
      // vertex(this.verti[2]["x"], this.verti[2]["y"]);
      // vertex(this.verti[3]["x"], this.verti[3]["y"]);
      // vertex(this.verti[4]["x"], this.verti[4]["y"]);
      // vertex(this.verti[5]["x"], this.verti[5]["y"]);
      // vertex(this.verti[6]["x"], this.verti[6]["y"]);
      // endShape(CLOSE);
      // pop();
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      scale(1.25, 1.25);
      translate(-this.center.x, -this.center.y);
      fill(this.color[0], this.color[1], this.color[2]);
      strokeWeight(0);
      beginShape();
      for (const { x, y } of this.blob) {
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();

      // Alternately, when drawing your blobs you could use
      // the bodies vertices, but it looks like these are
      // converted into a convex polygon.
      // push();
      // stroke(this.strokeColor[0], this.strokeColor[1], this.strokeColor[2]);
      // strokeWeight(5);
      // noFill();
      // beginShape();
      // for (const {
      //     x,
      //     y
      //   } of this.body.vertices) {
      //   vertex(x, y);
      // }
      // endShape(CLOSE);
      // pop();
    }
  }

  computeArea(vertices) {
    let area = 0;
    for (let i = 0; i < vertices.length - 1; i++) {
      let v = vertices[i];
      let vn = vertices[i + 1];
      area += (v.x * vn.y - vn.x * v.y) / 2;
    }

    return area;
  }

  computeCenter(vertices) {
    let area = this.computeArea(vertices);
    let cx = 0,
      cy = 0;
    for (let i = 0; i < vertices.length - 1; i++) {
      let v = vertices[i];
      let vn = vertices[i + 1];
      cx += ((v.x + vn.x) * (v.x * vn.y - vn.x * v.y)) / (6 * area);
      cy += ((v.y + vn.y) * (v.x * vn.y - vn.x * v.y)) / (6 * area);
    }

    return {
      x: cx,
      y: cy,
    };
  }
}
