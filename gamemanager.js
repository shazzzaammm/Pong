class GameManager {
  constructor() {
    this.leftScore = 0;
    this.rightScore = 0;
    this.leftPaddle = new Paddle(20);
    this.rightPaddle = new Paddle(width - 40);
    this.ball = new Ball();
  }
  update() {
    if (keyIsDown(UP_ARROW)) {
      this.rightPaddle.move(this.rightPaddle.speed);
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.rightPaddle.move(-this.rightPaddle.speed);
    }
    if (keyIsDown(87)) {
      this.leftPaddle.move(this.leftPaddle.speed);
    }
    if (keyIsDown(83)) {
      this.leftPaddle.move(-this.leftPaddle.speed);
    }
    // ball
    this.ball.updatePhysics();
    this.ball.checkCollisions(this.leftPaddle);
    this.ball.checkCollisions(this.rightPaddle);
    this.ball.bounds();
  }
  show() {
    this.leftPaddle.show();
    this.rightPaddle.show();
    this.ball.show();
  }
  reset() {
    this.ball = new Ball();
  }
}
