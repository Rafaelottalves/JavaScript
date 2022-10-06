function mostrarOp(n1, n2, cb1) {
    console.log(cb1(n1, n2))
}

mostrarOp(2, 4, function soma(v1, v2) {
    return v1 + v2
})

mostrarOp(2, 4, function mult(v1, v2) {
    return v1 * v2
})

mostrarOp(4, 4, function div(v1, v2) {
    return v1 / v2
})

mostrarOp(2, 4, function fat(v1, v2) {
    return v1 ** v2
})
