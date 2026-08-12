function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5js");
}

function draw() {
  background(220);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}