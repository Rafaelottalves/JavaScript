// verificar os nomes que começam com a mesma letra e guarda-los em um array

let nomes = ['rafael', 'paulo', 'pedro', 'josé', 'raul', 'matheus', 'joão']

let dir = []
let esq = []

for(let el of nomes) {
    dir.push(el[0])
}

for(let i = nomes.length-1;i >= 0;i--) {
    esq.push(nomes[i][0])
}

for(let i = 0;i < dir.length;i++) {
    
}
