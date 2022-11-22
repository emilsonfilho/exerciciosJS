// set métodos q utilizvos para alterar valores dos atributos dos nossos objs

class Carro {
  constructor(marca, modelo, cor) {
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
    this.ligado = false
    this.km = 0
    this.comb = 10
  }
  info() {
    console.log(`Marca…: ${this.marca}`)
    console.log(`Modelo…: ${this.modelo}`)
    console.log(`Cor…: ${this.cor}`)
    console.log("Ligado…:" + (this.ligado ? "Sim" : "Não"))
    console.log(`KM…: ${this.km}`)
    console.log(`Combustível…: ${this.comb}`)
    console.info("----------------------------")
  }
  ligar() {
    this.ligado = true
  }
  desligar() {
    this.ligado = false
  }
  set setComb(v) {
    this.comb = v
    console.log(`Combustível alterado. Novo valor: ${this.comb}`)
  }
  
  get getComb() {
    return this.comb
  }
}

let c1 = new Carro("Honda", "HRV", "Preta")
c1.setComb = 100 //Essa é a forma de definir através do set
console.log(c1.getComb)

c1.info()