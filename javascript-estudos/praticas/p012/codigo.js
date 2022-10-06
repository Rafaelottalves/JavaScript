// Saudar em cada horario

function saudar(hora, cb) {
    console.log(cb(hora))
}

horaAtual = new Date().getHours()

saudar(horaAtual, (h) => {
    if(h >= 6 && h <= 12) {
        return 'Bom dia'
    } 
    else if(h >= 13 && h <= 18) {
        return 'Bom tarde'
    }
    else if(h >= 19 && h <= 23) {
        return 'Boa noite'
    }
    else if(h >= 1 && h <= 5) {
        return 'Boa madrugada'
    }
})
