let valores = [8, 1, 7, 4, 2, 9]

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let c = valores.indexOf(5)
if(c == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 esta na posição ${c}`)
}
