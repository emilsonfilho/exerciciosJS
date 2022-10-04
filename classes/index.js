class Person {
    
    name;

    constructor(name) {
        this.name = name
    }

    introduceSelf() {
        console.log(`Hi! My name is ${this.name}`)
    }
}

const giles = new Person('Giles')

giles.introduceSelf()

// ------------------------------------------------

class Animal {
    sleep() {
        console.log('zzzzzzzzzz')
    }
 }

const spot = new Animal()
spot.sleep()

// -----------------------

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name)
        this.teaches = teaches
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be ur ${this.teaches} professor.`)
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5- 1) + 1)
        console.log(grade)
    }
}

class Student extends Person {
    #year

    constructor(name, year) {
        super(name)
        this.#year = year
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and  I'm in year ${this.#year}.`)
    }

    canStudyArchery() {
        return this.#year > 1
    }
}

class Example {
    somePublicMethod() {
        this.#somePrivateMethod()
    }

    #somePrivateMethod() {
        console.log('You called me?')
    }
}

const walsh = new Professor('Walsh', 'Psychology')
walsh.introduceSelf()

walsh.grade('my paper')

const summers = new Student('Summers', 2)

summers.introduceSelf()
summers.canStudyArchery()

const myExample = new Example()

myExample.somePublicMethod()

// myExample.#somePrivateMethod()

