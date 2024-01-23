function showColor() {
    clearCanvas()
    document.getElementById("colorSketch").style.visibility = "visible"
    document.getElementById("bwSketch").style.visibility = "hidden"
}

function showBW() {
    clearCanvas()
    document.getElementById("colorSketch").style.visibility = "hidden"
    document.getElementById("bwSketch").style.visibility = "visible"
}