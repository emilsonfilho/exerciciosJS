/*
const Livro = function(nome, editora, paginas) {
  gNome = nome,
  gEditora = editora,
  gPaginas = paginas
  
  this.getNome = function() {
    return gNome
  }
  
  this.getEditora = function() {
    return gEditora
  }
  
  this.getPaginas = function() {
    return gPaginas
  }
}
*/
/*
const Livro = {
  nome: "React Native",
  editora: "Casa do Código",
  paginas: 185,
  anunciar: function() {
    console.log("A Alura indica o livro" + this.nome + " !")
  }
}*/

/*
const GraphQL = new Livro("GraphQL", "Casa do Código", 143)
console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas())

const nome = "Alura"

const temp = new String(nome)
console.log(temp)
*/
//////////////////////////

class Livro {
  constructor(nome, editora, paginas) {
    this.nome = nome
    this.editora = editora
    this.paginas = paginas
  }
  
  anunciarTitulo() {
    console.log("Título: " + this.nome)
  }
  
  descreverTitulo() {
    console.log(this.nome + "é um livro da editora " + this.editora + " e tem " + this.paginas + " paginas")
  }
}

const NodeJS = new Livro("Primeiros Passos com NodeJS", "Casa do Código", 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()