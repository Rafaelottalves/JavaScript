const emprestimo = (valCasa, sal, anos) => {
    let quantMes = anos * 12
    let valMes = valCasa / quantMes

    let minimo = sal * 30 / 100

    if(valMes <= minimo) {
        return 'Emprestimo pode ser concedido!'
    }
    else {
        return 'Emprestimo invalido!'
    }
}

console.log(emprestimo(80000, 10000, 7))
