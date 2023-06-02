class Ball {
  constructor() {
    this.size = width / 100;
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.accel = width / 420.69;
    this.speed = this.accel * 2;
    if (random() > 0.5) {
      this.velocity.x = -this.speed;
    } else {
      this.velocity.x = this.speed;
    }
  }
  show() {
    fill(255);
    circle(this.position.x, this.position.y, this.size);
  }
  updatePhysics() {
    this.position.add(this.velocity);
  }
  checkCollisions(p) {
    //surely theres an easier way like bro its 4 lines in one if statement just for collision why is js like this
    if (
      this.position.x < p.x + p.w &&
      this.position.x > p.x &&
      this.position.y > p.y &&
      this.position.y < p.y + p.h
    ) {
      this.speed += this.accel;
      if (this.velocity.x > 0) {
        this.velocity.x = -this.speed;
      } else {
        this.velocity.x = this.speed;
      }
      //idc if inefficient it looks prettier
      let by = this.position.y;
      let py = p.y + p.h / 2;
      if (by > py) {
        // console.log("below");
        this.velocity.y += this.speed;
      } else if (by == py) {
        // console.log("center");
      } else {
        // console.log("above");
        this.velocity.y += -this.speed;
      }
    }
  }
  bounds() {
    let x = this.position.x;
    let y = this.position.y;
    if (x > width) {
      gm.reset();
      gm.leftScore++;
    } else if (x < 0) {
      gm.reset();
      gm.rightScore++;
    }
    if (y > height) {
      this.velocity.y = -this.velocity.y;
    } else if (y < 0) {
      this.velocity.y = -this.velocity.y;
    }
  }
}
