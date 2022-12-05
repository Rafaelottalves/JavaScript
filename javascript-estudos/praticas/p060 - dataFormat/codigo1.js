/* let str = document.getElementsByTagName('p')[0]
let meses = ['jan', 'fev', 'mar', 'abril', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

function format(txt) {
    let regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g

    let result = txt.textContent.replace(regex, function(reg, g1, g2, g3, pos, st) {
        let data = g1 + ' de ' + meses[parseInt(g2)-1]
        data += (g3) ? ' de ' + g3 : ''

        return data
    })

    txt.innerHTML = result
}

format(str) */

let listaTexto = document.getElementsByTagName('p')
let meses = ['jan', 'fev', 'mar', 'abril', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

function format(lista) {
    let regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g
    let result

    for(let txt of lista) {
        result = txt.textContent.replace(regex, function(reg, g1, g2, g3, pos, st) {
            let data = g1 + ' de ' + meses[parseInt(g2)-1]
            data += (g3) ? ' de ' + g3 : ''
    
            return data
        })
        txt.innerHTML = result
    }
}

format(listaTexto)
