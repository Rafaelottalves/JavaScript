let res = document.getElementById('res')

function exp(anos) {
    if(anos >= 0 && anos <= 1) {
        return res.innerHTML = 'Junior'
    }
    else if(anos > 1 && anos <= 3) {
        return res.innerHTML = 'Pleno'
    }
    else if(anos > 3 && anos <= 6) {
        return res.innerHTML = 'Senior'
    }
    else if(anos >= 7) {
        return res.innerHTML = 'Grão mestre jedi'
    }
}

let anosEstudos = 7
exp(anosEstudos)
