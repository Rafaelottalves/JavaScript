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

class combat extends carro {
    constructor (prot) {
        super(1)
        this.tiros = 1000
        this.prot = prot
    }
    info() {
        super.info()
        console.log('Qtde Tiros.: ' + this.tiros)
        console.log('Proteção...: ' + this.prot)
        console.log('------------------')
    }
}

c1 = new combat(20)
c1.info()
