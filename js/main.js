// get elements
function $id(id) {
    return document.getElementById(id)
}
const rad = $id("radius")
const clr = $id("color")
const rez = $id("results")
const crc = $id("circle")

// create our class
class Circle {
    constructor(r) {
        this.r = r
        this.pi = Math.PI
    }
    perimeter() {
        return +(2 * this.pi * this.r).toFixed(2)
    }
    area() {
        return +(this.pi * this.r * this.r).toFixed(2)
    }
}

// create second class
class DrawCircle extends Circle {
    constructor(r, cl) {
        super(r)
        this.cl = cl
    }
    draw() {
        return [
            crc.style.width = 2 * this.r + "px",
            crc.style.height = 2 * this.r + "px",
            crc.style.backgroundColor = this.cl,
            crc.style.borderRadius = "50%"
        ]
    }
}

// events
rad.addEventListener("input", () => {
    drawOnPage()
})
clr.addEventListener("input", () => {
    drawOnPage()
})

// action
function drawOnPage() {
    let inp = rad.value;
    let c = new DrawCircle(inp, clr.value);
    c.draw();
    rez.innerHTML = `Radius : ${c.r}<br />
    Perimeter : ${c.perimeter()}<br />
    Area : ${c.area()}`;
    // distruct to use later if needed 
    return [w, h, cc, rr] = c.draw()
}