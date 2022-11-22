const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: greeting.funcao()
}

const cat2 = {
  name : 'Elfie',
  breed : 'Aphrodite Giant',
  color : 'ginger',
  greeting: function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}

var greeting = { 
  funcao : function() {
	console.log(`Hello! Said ${this.name} the ${this.breed}.`)
}
}

cat.greeting();
cat2.greeting();
    