const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello! Said ${this.name} the ${this.breed}.`);
  }
}

const cat2 = {
  name : 'Prada',
  breed : 'gato-leão',
  color : 'orange',
  greeting: function() {
    console.log(`Hello! Said ${this.name} the ${this.breed}.`);
  }
}


console.log(cat.greeting())
console.log(cat2.greeting())