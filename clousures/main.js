var pet = function(nome) {
    var getNome = function() {
        return nome
    }

    return getNome
}

myPet = pet("Vivie")

myPet()
