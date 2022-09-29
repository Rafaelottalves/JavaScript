function gerarTab() {
    let valor = document.getElementById('valor')
    let val = Number(valor.value)

    let lista = document.getElementById('lista')
    lista.innerHTML = ''

    for(let c = 1;c <= 10;c++) {
        let item = document.createElement('option')
        lista.appendChild(item)

        let result = val * c

        item.text = `${val} x ${c} = ${result}`

        valor.value = ''
        valor.focus()
    }
}
