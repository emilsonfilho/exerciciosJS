function Cat(name, breed, color) {
  this.name = name
  this.breed = breed
  this.color = color
}

Cat.prototype.greeting = function () { return console.log('Meow! Said ' + this.name + ', the ' + this.color + ' ' + this.breed) }

const cat = new Cat('Bertie', 'Cymric', 'white')
const cat2 = new Cat('Garfield', 'Persian', 'orange')

cat.greeting()
cat2.greeting()