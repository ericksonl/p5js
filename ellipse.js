class Ellipse {
    constructor(x, y, diameter, opacity, scatter, steps) {
        this.x = x
        this.y = y
        this.diameter = diameter
        this.opacity = opacity
        this.scatter = scatter
        this.steps = steps
        this.color = {
            r: random(50, 255),
            g: random(50, 255),
            b: random(50, 255),
            a: this.opacity,
            rgb: 1
        }
    }

    display() {
        fill(this.color.r, this.color.g, this.color.b, this.color.a)
        noStroke()
        ellipse(this.x, this.y, this.diameter, this.diameter)
    }

    move() {
        this.x += random(-this.scatter, this.scatter);
        this.y += random(-this.scatter, this.scatter);
        if (this.x > width - this.diameter / 2 || this.x < this.diameter / 2) {
            this.x = constrain(this.x, this.diameter / 2, width - this.diameter / 2);
            console.log("Bounce")
        }

        if (this.y > height - this.diameter / 2 || this.y < this.diameter / 2) {
            this.y = constrain(this.y, this.diameter / 2, height - this.diameter / 2);
            console.log("Bounce")
        }
        this.steps--
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