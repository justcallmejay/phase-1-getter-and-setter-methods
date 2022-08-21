// Add your Circle class here
class Circle {

    constructor (radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return 3.14 * (this.radius * 2)
    }
    get area() {
        return 3.14 * (this.radius ** 2)
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.radius = Math.floor((circumference / Math.PI) / 2) 
    }

    set area(newArea) {
        this.radius = Math.floor(Math.sqrt(newArea / Math.PI))
    }
}


