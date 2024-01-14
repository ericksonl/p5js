class Ellipse {
    constructor(x, y, diameter) {
        this.x = x
        this.y = y
        this.diameter = diameter
        this.steps = 0
        this.color = {
            r: random(50, 255),
            g: random(50, 255),
            b: random(50, 255),
            rgb: 1
        }
    }

    display() {
        fill(this.color.r, this.color.g, this.color.b)
        noStroke()
        ellipse(this.x, this.y, this.diameter, this.diameter)
    }

    move() {
        this.x += random(-100, 100);
        this.y += random(-100, 100);
        this.steps++
    }

    changeColor() {
        this.color.r += this.color.rgb;
        this.color.g += this.color.rgb;
        this.color.b += this.color.rgb;

        if (this.color.r >= 255 || this.color.r <= 50 || this.color.g >= 255 || this.color.g <= 50 || this.color.b >= 255 || this.color.b <= 50) {
            this.color.rgb *= -1;
        }
    }
    
}