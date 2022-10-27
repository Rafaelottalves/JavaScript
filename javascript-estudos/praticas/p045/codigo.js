const lucroMensal = {
    mes1: 1000,
    mes2: 1200,
    mes3: 1210,
    mes4: 1210,
    mes5: 1250,
    mes6: 1500,
    mes7: 1400,
    mes8: 1400,
    mes9: 1800,
    mes10: 1600,
    mes11: 1520,
    mes12: 1370,
}

function avaliaLucro(valor) {
    let somaAnual = 0
    let mes = 0

    for(let i in valor) {
        somaAnual += valor[i]
        mes++
    }

    let mediaAnual = somaAnual / mes

    let menor = valor.mes1
    let mesMenor = lucroMensal[0]

    for(let i in valor) {
        if(valor[i] < menor) {
            menor = valor[i]
            mesMenor = i
        }
    }

    console.log(mesMenor)
}

avaliaLucro(lucroMensal)

//soma total anual / media anual
