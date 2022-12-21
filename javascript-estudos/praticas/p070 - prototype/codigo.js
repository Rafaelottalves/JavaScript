class carro {
    constructor (tpComb) {
        this.quantComb = 100
        this.tipoComb = tpComb
    }

    info() {
        console.log('Qtde Combus: ' + this.quantComb)
        console.log('Tipo Combus: ' + this.tipoComb)
    }
}


carro.prototype.potencia = 500
carro.prototype.velocidade = 0

carro.prototype.info2 = function() {
    console.log('Potencia: ' + this.potencia)
    console.log('Velocidade: ' + this.velocidade)
}

c1 = new carro(20)
c1.info()
c1.info2()
