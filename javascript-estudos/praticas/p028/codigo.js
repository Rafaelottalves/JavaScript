let mostrarIdade = function (idades, cb, cb2, quant, quant2) {
    let maiorIdade = quant(cb(idades))
    console.log(maiorIdade)
    
    let menorIdade = quant2(cb2(idades))
    console.log(menorIdade)
}

mostrarIdade([15, 17, 18, 25, 13, 29, 11], (ageList) => {
    let maior = []

    for(pos in ageList) {
        if(ageList[pos] >= 18) {
            maior.push(ageList[pos])
        }
    }

    return maior
},(ageList) => {
    let menor = []

    for(pos in ageList) {
        if(ageList[pos] < 18) {
            menor.push(ageList[pos])
        }
    }

    return menor
}, (lista) => {
    let quantidade = lista.length

    return quantidade
}, (lista) => {
    let quantidade = lista.length
    
    return quantidade
})
