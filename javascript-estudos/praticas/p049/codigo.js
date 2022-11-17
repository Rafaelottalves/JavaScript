const computador = {
    marca: 'Positivo',
    perifericos: ['Mouse', 'Teclado', 'Headset'],
    problemas: ['Memoria Ram', 'HD'],
    ligado: false,

    ligaDesliga() {
        if(computador.ligado == false) {
            console.log('ligando...')
            this.ligado = true
        } else {
            console.log('desligando...')
            this.ligado = false
        }
    },

    configs: {
        tela: '1440x625',
        teclado: 'pt-br',
    }
}

const partesFisicasInternas = {
    memoriaRam: '8gb',
    hd: '240gb',
    processador: 'i7',
    placaMae: 'Asus Rog',
    placaDeVideo: 'RTX 3080ti',
    ventoinhas: ['Asus', 'Positivo', 'Dell'],
}
console.log(computador)

Object.assign(computador, partesFisicasInternas)

console.log(computador)