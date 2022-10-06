var mostrar = (n1, n2, cb) => {
    console.log(cb(n1, n2))
}

mostrar(2, 3, (v1, v2) => {
    return v1 + v2
})

mostrar(2, 3, (v1, v2) => {
    return v1 * v2
})

mostrar(6, 3, (v1, v2) => {
    return v1 / v2
})
