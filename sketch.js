let gm;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  gm = new GameManager();
}

function draw() {
  background(20);
  //middle line
  stroke(255);
  drawingContext.setLineDash([15, 10]);
  line(width / 2, height, width / 2, 0);
  drawingContext.setLineDash([0, 0]);
  noStroke();
  //gameplay
  fill(255);
  gm.update();
  gm.show();
  //ui
  textSize(50);
  fill(255, 100);
  textAlign(CENTER, CENTER);
  text(gm.leftScore, width / 2 - 50, height / 2);
  text(gm.rightScore, width / 2 + 50, height / 2);
}
