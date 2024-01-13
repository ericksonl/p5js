var x = 900
var y = 450
var dx = 100
var dy = 100
speed = 1

function setup() {
  createCanvas(1800, 900);
  background(0)
}

function draw() {
  frameRate(60);
  stroke(255)
  strokeWeight(1)
  fill(0)
  ellipse(x, y, dx, dy)


  x = random(x - 10, x + 10)
  y = random(y - 10, y + 10)

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
