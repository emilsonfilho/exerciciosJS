// Cria um objeto do tipo UserException
function UserException(mensagem) {
    this.mensagem = mensagem
    this.nome = "UserException"
}

// Realiza a conversão da exceção para uma string adequada quando usada como uma string
// (ex. pelo console de erro)
UserException.prototype.toString = function() {
    return this.nome + ': "' + this.mensagem + '"'
}

// Cria uma instância de um tipo de objeto e lança ela
throw new UserException("Valor muito alto")