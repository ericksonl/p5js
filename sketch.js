const ellipses = []
let myCanvas
let opacity, ballSize, scatterSize

function setup() {
  
  myCanvas = createCanvas(windowWidth * 0.5, windowHeight * 0.5);
  background(random(0, 255), random(0, 255), random(0, 255))

  noFill()
  stroke(0)
  strokeWeight(4)
  rect(0, 0, width, height);
}

function draw() {
  for (i = 0; i < ellipses.length; i++) {
    ellipses[i].display()
    // ellipse2.display()
    if (ellipses[i].steps > 1) {
      console.log(ellipses[i].steps)
      ellipses[i].move()
      ellipses[i].changeColor()
    } else {
      ellipses.splice(i, 1)
    }
  }
}


function spawnEllipse() {
  ellipses.push(new Ellipse(random(400, 500), random(375, 475), getSize(), getOpacity(), getScatter(), getSteps()))
}

function saveImg() {
  savedImg = myCanvas.get(0, 0, width, height)
  savedImg.save('suck', 'png')
}

function clearCanvas() {
  clear()
  ellipses.length = 0
  background(random(0, 255), random(0, 255), random(0, 255))
  
  noFill()
  stroke(0)
  strokeWeight(4)
  rect(0, 0, width, height);
}

function getOpacity() {
  opacity = parseInt(document.getElementById("opacityRange").value)
  document.getElementById("opacity").innerHTML = "Opacity: " + Math.floor(opacity / 255 * 100) + "%"
  return (opacity)
}

function getSize() {
  ballSize = parseInt(document.getElementById("sizeRange").value)
  document.getElementById("ballSize").innerHTML = "Ball Size: " + ballSize
  return (ballSize)
}

function getScatter() {
  scatterSize = parseInt(document.getElementById("scatterRange").value)
  document.getElementById("scatter").innerHTML = "Scatter: " + scatterSize + "px"
  return (scatterSize)
}

function getSteps() {
  generations = parseInt(document.getElementById("stepsRange").value)
  document.getElementById("steps").innerHTML = "Generations: " + generations
  return (generations)
}