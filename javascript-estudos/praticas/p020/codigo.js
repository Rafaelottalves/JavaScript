function mult(valor, cb) {
    let vezes = valor * 3
    return cb(vezes)
}

function soma(n1, n2) {
    let soma = n1 + n2
    return soma
}

mult(soma(2, 2), (op) => {
    console.log(op)
})
