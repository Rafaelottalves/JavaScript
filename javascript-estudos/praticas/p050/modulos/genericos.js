export const agrupaMenorMaior = pessoas => (
    pessoas.reduce(function(valorAcumulador, valorArray) {
        const propMaiorMenor = valorArray.idade >= 18 ? 'maiores' : 'menores'
        
        valorAcumulador[propMaiorMenor].push(valorArray)
    
        return valorAcumulador
    }, {menores: [], maiores: []})
)
