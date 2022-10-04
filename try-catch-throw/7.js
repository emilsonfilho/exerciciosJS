function f() {
    try {
        console.log(0)
        throw "bogus"
    } catch (e) {
        console.log(1)
        return true // esse retorno é suspenso até que o bloco finally seja concluído
        console.log(2)
    } finally {
        console.log(3)
        return false // substitui o return anterior
        console.log(4)
    }

    // return false é executado agora
    console.log(5)
}

f()