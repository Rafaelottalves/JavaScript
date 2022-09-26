function nivelar() {
    let pergSal = document.getElementById('pergSal')
    let sal = Number(pergSal.value)
    let res = document.getElementById('res')
    let novoSal = 0

    if(sal > 1500) {
        novoSal = sal - (sal * 5 / 100)
    } else {
        novoSal = sal + (sal * 5 / 100)
    }

    return res.innerHTML += novoSal
}


// ver quem tem menos salario e aumentar o salario em porcentages e quem tem mais abaixar em porcentagem


// function nivelar(sal) {
//     let res = document.getElementById('res')
//     let novoSal = ''

//     if(sal > 1500) {
//         novoSal = sal - (sal * 5 / 100)
//     } else {
//         novoSal = sal + (sal * 5 / 100)
//     }

//     return res.innerHTML += novoSal
// }

// let salario = Number(prompt('Qual o seu salario atual'))
// nivelar(salario)