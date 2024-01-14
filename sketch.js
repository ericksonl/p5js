var boundsX = 0
var boundsY = 0
var rWidth = 800
var steps = 0
const ellipses = []
let myCanvas

function setup() {
  myCanvas = createCanvas(800, 800)
  background(random(0,255), random(0,255), random(0,255))

  console.log(ellipses.length)

  noFill()
  strokeWeight(2)
  rect(boundsX, boundsY, rWidth, rWidth);
}

function draw() {
  for (i = 0; i < ellipses.length; i++) {
    ellipses[i].display()
    // ellipse2.display()

    if (
      ellipses[i].x >= boundsX + ellipses[i].diameter &&
      ellipses[i].x <= boundsX + rWidth - ellipses[i].diameter &&
      ellipses[i].y >= boundsY + ellipses[i].diameter &&
      ellipses[i].y <= boundsY + rWidth - ellipses[i].diameter && ellipses[i].steps < 500
    ) {
      ellipses[i].move()
      ellipses[i].changeColor()
    }
  }

  if (steps < 500) {
    steps++
  }
}

function saveImg() {
  savedImg = myCanvas.get(boundsX, boundsY, rWidth, rWidth)
  savedImg.save('suck', 'png')
}

function spawnEllipse() {
  ellipses.push(new Ellipse(random(400, 500), random(375, 475), random(30, 60)))
}