function paraReal(v) {
    let novoV = v * 5.35
    let valorConvert = novoV.toLocaleString('pt-br', {style:'currency',currency:'BRL'})

    return valorConvert
}

function paraDolar(v) {
    let novoV = v / 5.35
    let valorConvert = novoV.toLocaleString('en', {style:'currency',currency:'USD'})

    return valorConvert
}

function conversao(v1, v2) {
    let valorFinal = 0

    if(v1 == 1) {
        valorFinal = paraReal(v2)

        return valorFinal
    } else if(v1 == 2) {
        valorFinal = paraDolar(v2)

        return valorFinal
    }
}

let conversaoTipo = 2
let valorDin = 100

console.log(conversao(conversaoTipo, valorDin))
