class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (typeof value != 'number') {
            throw new TypeError('Diameter musst be a number')
        }
        this.radius = value / 2;
    }
    get area() {
        return this.radius ** 2 * Math.PI;
    }
}
const c = new Circle(4);
console.log(c)
console.log(c.radius);
console.log(c.diameter);
console.log("Area", c.area)
c.radius = 6;
console.log(c.diameter);
console.log("Area", c.area);
c.diameter = 10;
console.log(c)
c.diameter = 'aha'