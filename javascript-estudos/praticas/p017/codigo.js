function mostrar(lista) {
    console.log(lista)
}

function findEv(list, cb) {
    let pares = []

    for(pos in list) {
        if(list[pos] % 2 == 0) {
            pares.push(list[pos])
        }
    }

    cb(pares)
}

findEv([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mostrar)
