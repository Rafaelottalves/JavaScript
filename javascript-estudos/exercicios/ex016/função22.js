function avaliador(frase) {
    let fraseFormat = frase.toLowerCase()
    let quantA = 0
    let primA = 0
    let ultA = 0

    for(let c = 0;c < frase.length;c++) {
        if(fraseFormat[c] == 'a') {
            quantA ++
        }
    }

    for(let c = 0;c < frase.length;c++) {
        if(fraseFormat[c] == 'a') {
            primA = c
            break
        }
    }

    ultA = fraseFormat.lastIndexOf('a')

    return `A letra "A" aparece ${quantA} vezes\nA primeira letra "A" aparece na posição ${primA}\nA ultima letra "A" aparece na posição ${ultA}`
}

let resultado = avaliador('opa qual a boa')
console.log(resultado)
