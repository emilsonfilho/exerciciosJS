let sen = Math.sin((5 * Math.PI)/6);
console.log(sen);

let r = 2;
let d = Math.PI * r * r;
console.log(d);

// Se você quiser converter um binário em um inteiro, basta mudar a base do segundo parâmetro
console.log(parseInt("11", 2))

// Você também pode usar o operador unário + para converter valores em números:
console.log(+"42")

// Você pode testar se é NaN usando a função embutida isNaN():
console.log(isNaN(NaN));

// JavaScript também tem os valores especiais Infinity e -Infinity:
console.log(1/0)

// Você pode testar se o valor é Infinity, -Infinity e NaN usando a função embutida isFinite():
console.log(isFinite(1/0));
console.log(isFinite(NaN));

let nS = "10.2abc";

console.log(parseInt(nS));
console.log(parseFloat(nS));
console.log(+nS);

// Pegar elementos de acordo com o index
console.log("hello".charAt(0));

console.log("" == null) // false

// No JavaScript há distinção entre null, que é um objeto do tipo 'object' para indicar deliberadamente uma ausência de valor, do undefined, que é um objeto do tipo 'undefined' para indicar um valor não inicializado

// se uma variável é definida usando var numa instrução composta (por exemplo dentro de uma estrutura de controle if), ela será visível por toda a função.

// Obs: A definição de variáveis usando o let foi introduzida no ECMAScript 6. O let permite escopo de bloco, ou seja, é possível definir uma variável em um bloco if, e esta variável ter escopo limitado ao bloco if- por exemplo.

// Os operadores && e || usam a lógica de curto-circuito, o que quer dizer que, o segundo operando ser executado dependerá do primeiro operando. Isso é útil para checagem de objetos null antes de acessar seus atributos:

let o = {
  getName: () => "getName() funcionou" 
}

var name = o && o.getName();

// Ou para configuração de valores-padrões:

let otherName;
var name_2 = otherName || "default";

// Deixar uma vírgula à direita no final de um vetor literal gerará inconsistência entre os navegadores, portanto não faça isso.

// Uma forma mais elegante ainda poderia ser:

let a = new Array();
for (var i = 0, item; item = a[i++];) {
  // Faça algo com o item
}


// Note que esse truque só deveria ser usado em vetores que você sabe não conter valores "falsy" (vetores de objeto ou nós DOM por exemplo). Se você iterar sobre dados numéricos que possam ter o 0 ou sobre dados string que possam ter uma string vazia, você deveria usar a segunda forma como alternativa.

a[a.length] = item;
// É igual a a.push(item)

// a.pop() Remove e retorna o último item.

// Pode parecer um pouco bobo, mas no corpo da função você tem acesso a uma variável adicional chamada arguments, que é um objeto parecido com um vetor que contém todos os valores passados para a função. Vamos rescrever a função add para tomarmos tantos valores quanto quisermos:

function add() {
  var sum = 0;
  for (let i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(add(2, 3, 4, 5))

function avg() {
  var sum = 0;
  for (let i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i]
  }
  return sum / arguments.length
}

console.log(avg(2, 3, 4, 5))

// Funções com comportamento de classes

function makePerson(first, last) {
  return {
    first: first,
    last: last, 
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function() {
      return this.last + ', ' + this.first;
    }
    // Fazer Arrow Function nesse caso NÃO funciona!
  }
}

var s = makePerson("Simon", "West");
console.log(s.fullName());
console.log(s.fullNameReversed())