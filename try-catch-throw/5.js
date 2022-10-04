function getMonthName(mo) {
    mo--
    var months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    if (months[mo]) {
        return months[mo]
    } else {
        throw "InvalidMonthMo" // lança uma palavra-chave aqui usada.
    }
}

function logMyErrors() {
    console.log("Erro: Mês Inválido")
}

try {
    myMonth = 12 // Mês a ser consultado
    monthName = getMonthName(myMonth)
    console.log(monthName)
} catch (e) {
    monthName = "unknown"
    logMyErrors(e) // passa a exceção para o manipulador de erro -> sua função local
}