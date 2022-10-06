function listOdd(num) {
    mostrarOdd(num)
}


function mostrarOdd(arr) {
    let imp =[]

    for(pos in arr) {
        if(arr[pos] % 2 == 1) {
            imp.push(arr[pos])
        }
    }

    console.log(imp)
}

listOdd([2, 4, 6, 1, 9, 10, 3, 7, 11, 12, 13, 14, 15, 16, 8])
