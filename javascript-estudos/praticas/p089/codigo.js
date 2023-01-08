function* cores(  ) {
    yield 'vermelho'
    yield 'azul'
    yield 'amarelo'
}
for(let c of cores(  )) {
    console.log(c)
}