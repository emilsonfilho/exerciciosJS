class Estudante {
    constructor(matricula, nome, turma) {
        this.matricula = matricula
        this.nome = nome
        this.turma = turma
    }
}

const emilson = new Estudante(2340707, "FRANCISCO EMILSON SANTOS SOUZA FILHO", "2º ANO INFORMÁTICA")
const andre = new Estudante(16414, "ANDRÉ LUIS RIBEIRO MARQUES", "2º ANO INFORMÁTICA")

let str = ""
let str2 = ""

const pessoas = [emilson, andre]

for (let pessoa in pessoas) {
    Object.keys(pessoas[pessoa]).forEach(function(item) {
        console.log(pessoas[pessoa][item])

        str += `${pessoas[pessoa][item]} - `
    })

    str2 = str.slice(-3)
}

// str.length - 4 == de onde é para t

console.log(str)

console.log(str2)