function mostrar(conteudo, cb, cb2) {
    let result = cb(conteudo)

    cb2(result)
}

mostrar([1, 2, 3, 4, 5], (num) => {
    let quad = []

    for(pos in num) {
        op = num[pos] * 2

        quad.push(op)
    }

    return quad
}, (lista) => {
    for(pos in lista) {
        console.log(lista[pos])
    }
})
