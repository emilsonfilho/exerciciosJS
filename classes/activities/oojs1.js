class Shape {
    constructor(sideLength, sides, name) {
        this.name = name
        this.sides = sides
        this.sideLength = sideLength
    }

    calcPerimeter() {
        console.log(this.sides * this.sideLength)
    }
}

class Square extends Shape {
    name = 'square'
    sides = 4
    
    constructor(sideLength) {
        super(sideLength)
    }

    calcArea() {
        console.log(Math.pow(this.sideLength, 2))
    }
}

const square = new Square(5) 
console.log(square)
square.calcPerimeter()
square.calcArea()