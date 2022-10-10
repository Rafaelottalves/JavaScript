(function (valor) {
    if(valor == 'rafael') {
        return function (idade) {
            if(idade >= 18) {
                console.log(`Você se chama ${valor} e é maior de idade`)
            }
            else {
                console.log(`Você se chama ${valor} e é menor de idade`)
            }
        }
    }
    else {
        return function (idade) {
            if(idade >= 18) {
                console.log(`Você não se chama rafael, seu nome é ${valor} e você é maior de idade`)
            }
            else {
                console.log(`Você não se chama rafael, seu nome é ${valor} e você é menor de idade`)
            }
        }
    }
})('rafael')(18)
