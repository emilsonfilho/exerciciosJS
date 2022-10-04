function verifiqueDados() {
    if (document.form1.tresCaracteres.value.length == 3) {
        return true
    } else {
        alert("Informe exatamente três caracteres. " + document.form1.tresCaracteres.value + " não é válido.")
        return false
    }
}