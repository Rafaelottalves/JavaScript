(function (val) {
    let num = val

    if(val % 2 == 0) {
        return function () {
            if(num < 10) {
                console.log('par menor que 10')
            } else {
                console.log('par maior que 10')
            }
        }
    } else {
        return function () {
            if(num < 10) {
                console.log('impar menor que 10')
            } else {
                console.log('impar maior que 10')
            }
        }
    }
})(13)()
