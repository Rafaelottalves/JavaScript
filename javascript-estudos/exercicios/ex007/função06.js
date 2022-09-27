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

console.log(paraDolar(100))


// function conversao(v1, v2) {
// }

// console.log(conversao(1, 100))
