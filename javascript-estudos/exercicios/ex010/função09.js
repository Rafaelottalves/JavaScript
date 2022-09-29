let valorEscolhido = 0

let valEntrada = document.getElementById('entrada')
let escol = document.getElementById('escolha')

let res = document.getElementById('res')

function escolher() {
    let esc = Number(escol.value)

    let unidEsc = document.getElementById('chamada')

    if(esc == 1) {
        res.innerHTML = ''

        valEntrada.value = ''
        valEntrada.focus()

        unidEsc.innerHTML = ''
        unidEsc.innerHTML += 'CM'

        valorEscolhido = 1
    } else if(esc == 2) {
        res.innerHTML = ''

        valEntrada.value = ''
        valEntrada.focus()

        unidEsc.innerHTML = ''
        unidEsc.innerHTML += 'MM'

        valorEscolhido = 2
    } else if(esc == 3) {
        res.innerHTML = ''

        valEntrada.value = ''
        valEntrada.focus()

        unidEsc.innerHTML = ''
        unidEsc.innerHTML += 'KM'

        valorEscolhido = 3
    } else {
        alert('Valor não permitido')
        escol.value = ''
        escol.focus()
    }
}

function conversor() {
    let valEnt = Number(valEntrada.value)

    let valGeral = 0

    if(valorEscolhido == 1) {
        valGeral = valEnt * 100

        escol.value = ''
        escol.focus()

        res.innerHTML += `${valEnt}m é ${valGeral}cm`
    } else if(valorEscolhido == 2) {
        valGeral = valEnt * 1000

        escol.value = ''
        escol.focus()

        res.innerHTML += `${valEnt}m é ${valGeral}mm`
    } else if(valorEscolhido == 3) {
        valGeral = valEnt * 0.001

        escol.value = ''
        escol.focus()

        res.innerHTML += `${valEnt}m é ${valGeral}km`
    }
}
