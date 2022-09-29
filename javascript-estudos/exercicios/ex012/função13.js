function calcular() {
    let entrada1 = document.getElementById('entrada1')
    let entrada2 = document.getElementById('entrada2')

    let ent1 = Number(entrada1.value)
    let ent2 = Number(entrada2.value)

    let res1 = document.getElementById('res1')
    let res2 = document.getElementById('res2')

    let area = ent1 * ent2
    let litros = area / 2

    res1.innerHTML += `${area}m²`
    res2.innerHTML += `${litros}l`
}
