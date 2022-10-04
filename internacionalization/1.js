//var msPorDia = 24 * 60 * 60 * 1000 // Fórmula para a quantidade de milissegundos por dia

// var july172014 = new Date(msPorDia * (44 * 365 + 11 + 197))

let _2day = new Date()

console.log(_2day)

var opcoes = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "long" // também pode ser "short"
}

var portugueseDateTime = new Intl.DateTimeFormat("pt-BR", opcoes).format

console.log(portugueseDateTime(_2day))