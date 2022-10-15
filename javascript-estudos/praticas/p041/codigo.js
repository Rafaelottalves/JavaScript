// adiciona o numero | escolher o sinal da operacao | o valor a ser operado | transforma a lista

let numeros = []
let resultado = []
let pares = []

let adicionar = function () {
    let val1 = document.getElementById('valor')
    let valor1 = Number(val1.value)

    numeros.push(valor1)
    val1.value = ''
    val1.focus()
}

let operar = () => {
    let sin = document.getElementById('sinal')
    let sinal = sin.value
    let val2 = document.getElementById('val2')
    let valor2 = Number(val2.value)

    if(sinal == '+' || sinal == '-' || sinal == '*' || sinal == '/' || sinal == '%' || sinal == '**') {
        if(sinal == '+'){
            resultado = numeros.map((valor) => {
                return valor + valor2
            })
        }

        else if(sinal == '-') {
            resultado = numeros.map((valor) => {
                return valor - valor2
            })
        }

        else if(sinal == '*') {
            resultado = numeros.map((valor) => {
                return valor * valor2
            })
        }
        
        else if(sinal == '/') {
            resultado = numeros.map((valor) => {
                return valor / valor2
            })
        }

        else if(sinal == '%') {
            resultado = numeros.map((valor) => {
                return valor % valor2
            })
        }

        else if(sinal == '**') {
            resultado = numeros.map((valor) => {
                return valor ** valor2
            })
        }
    }
    else {
        alert('Valor incorreto! digite um sinal matematico valido')
    }

    sin.value = ''
    sin.focus()
    val2.value = ''

    alert(`Valores originais: ${numeros}`)
    alert(`Valores modificados: ${resultado}`)
}

function getEv() {
    pares = resultado.filter(valor => valor % 2 == 0)

    alert(pares)
}

//somar todos os pares

function somarPar() {
    let resultadoSomaPares = pares.reduce((acc, val) => {
        return acc + val
    })

    alert(resultadoSomaPares)
}
