const ellipses = []
let myCanvas

function setup() {

  myCanvas = createCanvas(windowWidth * 0.4, windowHeight * .75);
  myCanvas.parent("canvasForHTML")
  background(random(0, 255), random(0, 255), random(0, 255))
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
  let size = getSize()
  let opacity = getOpacity()
  let scatter = getScatter()
  let steps = getSteps()
  let x = random(size, width - size)
  let y = random(size, height - size)
  ellipses.push(new Ellipse(x, y, size, opacity, scatter, steps))
}

function saveImg() {
  savedImg = myCanvas.get(0, 0, width, height)
  savedImg.save('generatedArt', 'png')
}

function clearCanvas() {
  clear()
  ellipses.length = 0
  background(random(0, 255), random(0, 255), random(0, 255))
}

function randomizeControls() {
  document.getElementById("opacityRange").value = Math.floor(random(1, 255))
  getOpacity()
  document.getElementById("sizeRange").value = Math.floor(random(5, 105))
  getSize()
  document.getElementById("scatterRange").value = Math.floor(random(5, 105))
  getScatter()
  document.getElementById("stepsRange").value = Math.floor(random(1, 1000))
  getSteps()
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
  steps = parseInt(document.getElementById("stepsRange").value)
  document.getElementById("steps").innerHTML = "Generations: " + steps
  return (steps)
}

