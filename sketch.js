var x = 900
var y = 450
var dx = 100
var dy = 100
speed = 1
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(1800, 900);
  background('#005073')

    // Define colors
    b1 = color(255);
    b2 = color(0);
    c1 = color(204, 102, 0);
    c2 = color(0, 102, 153);
  
    // setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
    // setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
}

function draw() {  
  stroke('#71c7ec')
  strokeWeight(1)
  fill('#107dac')
  ellipse(x, y, dx, dy)


  x = random(x - 15, x + 15)
  y = random(y - 15, y + 15)

  if (dx >= 100 || dy >= 100) {
    speed = -1
  } else if (dx <= 20 || dy <= 20) {
    speed = 1
  }
  
  dx += speed
  dy += speed

  if (x > width) {
    x = x - 10
  } else if (x < 0) {
    x = x + 10
  }

  if (y > height) {
    y = y - 10
  } else if (y < 0) {
    y = y + 10
  }

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}