class Paddle {
  constructor(x) {
    this.h = height / 5;
    this.w = width / 75;
    this.x = x;
    this.y = height / 2 - this.h / 2;
    this.speed = width / 90;
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
  move(deltaY) {
    this.y -= deltaY;
    this.y = constrain(this.y, 0, height - this.h);
  }
}
