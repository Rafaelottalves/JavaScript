function gerar() {
    var num = document.getElementById('num')
    var n1 = Number(num.value)

    var lista = document.getElementById('tabuada')

    for(var c = 0;c <= 10;c++) {
        var conta = n1 * c

        var opção = document.createElement('option')
        lista.appendChild(opção)
        
        opção.innerHTML += `${n1} x ${c} = ${conta}`
    }
}
