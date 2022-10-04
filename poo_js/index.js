class Person {
    constructor(name) {
        this.name = name
    }

    introduceSelf() {
        console.log(`My name is ${this.name}.`)
    }
}

class Professor extends Person {
    constructor(name, teaches) {
        super(name)
        this.teaches = teaches
    }

    introduceSelf() {
        console.log(`My name is Professor ${this.name} and I will be your ${this.teaches} professor.`)
    }
}

class Student extends Person {
    constructor(name, year) {
        super(name)
        this.year = year
    }

    introduceSelf() {
        switch (this.year) {
            case 1:
                this.year = 'first'
                break;
            case 2:
                this.year = 'second'
                break;
            case 3:
                this.year = 'third'
                break;
            default:
                this.year = 'some'
                break;
        }
        console.log(`My name is Summers and I'm in the ${this.year} year.`)
    }
}

const walsh = new Professor('Walsh', 'Psychology')
const lillian = new Professor('Lillian', 'Poetry')
const summers = new Student('Summers', 1)
const  pratt = new Person('Pratt')

walsh.introduceSelf()
lillian.introduceSelf()
summers.introduceSelf()
pratt.introduceSelf()