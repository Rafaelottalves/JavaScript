(function (val) {
    let op = val * 2

    return function(val2) {
        let op2 = op * val2

        console.log(op2)
    }
})(2)(3)
