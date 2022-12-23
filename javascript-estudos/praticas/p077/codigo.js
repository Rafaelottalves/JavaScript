class Carro {
    constructor (nome, marca, portas, potencia) {
        this.nome = nome
        this.marca = marca
        this.portas = portas
        this.potencia = potencia
    }
}

class CarroCombate extends Carro {
    constructor (nome, marca, portas, potencia, blindagem, tiros) {
        super(nome, marca, portas, potencia)
        this.blindagem = blindagem
        this.tiros = tiros
    }
}

class CarroCorrida extends Carro {
    constructor (nome, marca, portas, potencia) {
        super(nome, marca, portas, potencia)
        this.nitro = false
        this.turbo = true
    }
}

class CarroViagem extends Carro {
    constructor (nome, marca, portas, potencia, bancos, tamanho) {
        super(nome, marca, portas, potencia)
        this.bancos = bancos
        this.tamanho = tamanho
    }
}

const carro = new Carro()
const carroCombate = new Carro()
const carroCorrida = new Carro()
const carroViagem = new Carro()
