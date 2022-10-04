/*
var criarPet = function(nome) {
    var sex

    return {
        setNome: function(newNome) {
            nome = newNome
        },

        getNome: function() {
            return nome
        },

        getSex: function() {
            return sex
        },

        setSex: function(newSex) {
            if (typeof newSex === "string" && (newSex.toLocaleLowerCase() == "macho" || newSex.toLocaleLowerCase() == "fêmea")) {
                sex = newSex
            }
        }
    }
}
*/

/*
var criarPet = (nome, sex) => {
    return {
        setNome: function(newNome) {
            nome = newNome
        },

        getNome: function() {
            return nome
        },

        getSex: function() {
            return sex
        },

        setSex: function(newSex) {
            if (typeof newSex === "string" && (newSex.toLocaleLowerCase() == "macho" || newSex.toLocaleLowerCase() == "fêmea")) {
                sex = newSex
            }
        }
    }
}
*/

class criarPet {
    constructor(nome, sex) {
        this.nome = nome
        this.sex = sex
    }

    getNome() {
        return this.nome
    }

    getSex() {
        return this.sex
    }
}

var pet = new criarPet("Vivie", "macho")
console.log(pet.getNome(), pet.getSex())


console.log(typeof(pet)) // por incrível que pareça: OBJECT
// Basicamente, esse criarPet é como se fosse uma classe em JS, só que declarada com functions e returns
// Gostei de ter visto classes antes porque me deu maior clareza aqui
// E POV: quando usamos return{} é para retornar um objeto

/*
pet.setNome("Oliver")
pet.setSex("macho")


console.log(pet.getSex())
console.log(pet.getNome())
*/