function lista(array, find) {
    return find(array, (content) => {
        console.log(content)
    })
}

lista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (arr, cb) => {
    let pares = []
    for(pos in arr) {
        if(arr[pos] % 2 == 0) {
            pares.push(arr[pos])
        }
    }
    cb(pares)
})
