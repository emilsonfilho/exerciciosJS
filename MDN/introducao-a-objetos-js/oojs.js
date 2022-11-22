var pessoa = {
  nome: {
    primeiro: 'Bob',
    ultimo: 'Smith'
  },
  idade: 32,
  sexo: 'masculino',
  interesses: ['música', 'esquiar'],
  bio: function() {
    alert(this.nome.primeiro + ' ' +  this.nome.ultimo + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.')
  },
  saudacao: function() {
    alert('Oi! Eu sou ' + this.nome.primeiro + '.')
  }
}

pessoa.idade = 45
pessoa.nome.ultimo = 'Chratchit'
pessoa['olhos'] = 'castanho'
pessoa.despedida = function() { alert('Adeus a todos!') }

let myDataName = 'altura'
let myDataValue = '1.75m'
pessoa[myDataName] = myDataValue