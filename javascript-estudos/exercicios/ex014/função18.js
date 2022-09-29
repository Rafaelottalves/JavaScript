function aumentoSal(salario) {
    let salarioAlm = salario + (salario * 15 / 100)
    let novoSal = salarioAlm.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

    salarioPadrao = salario.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

    return `Um funcionario que ganhava ${salarioPadrao}, com 15% de aumento, passa a receber ${novoSal}`
}

let resultado = aumentoSal(1000)
console.log(resultado)
