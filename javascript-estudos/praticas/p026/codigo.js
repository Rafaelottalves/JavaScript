function mostrar(conteudo, cb) {
    let result = cb(conteudo)

    for(pos in result) {
        console.log(result[pos])
    }
}

mostrar([1, 2, 3, 4, 5], (num) => {
    let quad = []

    for(pos in num) {
        op = num[pos] * 2

        quad.push(op)
    }

    return quad
})
