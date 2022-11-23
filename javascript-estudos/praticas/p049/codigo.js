/* const computador = {
    marca: 'Positivo',
    MemoriaRam: '8gb',
    hd: '240gb',
    processador: 'i7',
    placaMae: 'Asus Rog',
    placaDeVideo: 'RTX 3080ti',
    perifericos: ['Mouse', 'Teclado', 'Headset'],
    problemas: ['Memoria Ram', 'HD', 'Processador'],
    acc: 0,
    get concertaErro() {
        if(this.acc > this.problemas.length-1) {
            return 'Tudo ja foi concertado'
        }
        let concertando = `Concertando ${this.problemas[this.acc]}`
        ++this.acc
        return concertando
    },
} */

function computador(lang='pt-br') {
    this.lang = lang
    this.lig = true
}

computador.prototype.estado = function() {
    if(this.lig) {
        console.log('Esta ligado. Desligando...')
    } else {
        console.log('Esta desligado. Ligando...')
    }
    this.lig = !this.lig
}

computador.prototype.config = function() {
    if(this.lang == 'pt-br') {
        console.log('Computador esta em portugues')
    } else if(this.lang == 'en') {
        console.log('Computador esta em ingles')
    } else {
        console.log('Computador esta em uma lingua não catalogada')
    }
}

let comp = new computador()
console.log(comp)

comp.estado()
comp.config()
