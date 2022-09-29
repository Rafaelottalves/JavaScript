function formatando() {
    let ent = document.getElementById('entrada').value
    let res = document.getElementById('res')

    let maior = ent.toUpperCase()
    let menor = ent.toLowerCase()

    let junto = ent.replace(/\s/g, '')
    let quant = junto.length

    let primNome = 0
    let prim = ''

    for(let c = 0;c < ent.length;c++) {
        if(ent[c] == ' ') {
            break
        }
        primNome ++
        prim += ent[c]
    }




    res.innerHTML += `<p>Em caixa alta: <strong>${maior}</strong></p>`
    res.innerHTML += `<p>Em caixa baixa: <strong>${menor}</strong></p>`
    res.innerHTML += `<p>tem ao todo <strong>${quant}</strong> letras</p>`
    res.innerHTML += `<p>O primeiro nome tem <strong>${primNome}</strong> letras</p>`
    res.innerHTML += `<p>O primeiro nome é <strong>${prim}</strong></p>`
}
