function myConcat(separador) {
    var result = "", i 
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separador
    }

    return result
}

console.log(myConcat(", ", "red", "orange", "blue"))