
function unidade(valorUnidade) {
    function conversor(valMetros) {
        let valorFinal = 0
        let resposta = ''

        if(valorUnidade == 1) {
            valorFinal = valMetros * 100
            resposta = `${valMetros}m é ${valorFinal}cm`
        }
        else if(valorUnidade == 2) {
            valorFinal = valMetros * 1000
            resposta = `${valMetros}m é ${valorFinal}mm`
        }
        else if(valorUnidade == 3) {
            valorFinal = valMetros * 0.001
            resposta = `${valMetros}m é ${valorFinal}km`
        }
        else {
            resposta = 'Valor invalido, Digite outro valor e tente de novo'
        }

        return resposta
    }

    return conversor
}

let valor = unidade(4)
console.log(valor(1))
