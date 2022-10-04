function doSomethingErrorProne() {
    if (ourCodeMakesAMistake()) {
        throw (new Error('A mensagem'))
    } else {
        doSomethingToGetAJavaScriptError()
    }
}

try {
    doSomethingErrorProne()
} catch (e) {
    console.log(e.name) // 'Error'
    console.log(e.message) // 'A Mensagem' ou uma mensagem de erro em JavaScript
}