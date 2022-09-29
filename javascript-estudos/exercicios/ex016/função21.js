function avaliar() {
    let frase = document.getElementById('entrada').value
    let res = document.getElementById('res')

    let letraA = 0
    let letraAprim = 0
    let letraAult = 0

    for(let c = 0;c < frase.length;c++) {
        if(frase[c] == 'A' || frase[c] == 'a') {
            letraA ++
        }
    }

    for(let c = 0;c < frase.length;c++) {
        if(frase[c] == 'A' || frase[c] == 'a') {
            letraAprim = c
            break
        }
    }

    letraAult = frase.lastIndexOf('a')

    res.innerHTML += `<p>A letra "A" aparece <strong>${letraA}</strong> vezes na frase: ${frase}</p>`
    res.innerHTML += `<p>A primeira letra "A" esta na posição <strong>${letraAprim}</strong> da frase: ${frase}</p>`
    res.innerHTML += `<p>A ultima letra "A" esta na posição <strong>${letraAult}</strong> da frase: ${frase}</p>`
}
