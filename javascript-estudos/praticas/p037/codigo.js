const alunos = [
    {name: 'jake', score: 6.4},
    {name: 'susan', score: 8.6},
    {name: 'emma', score: 9.4},
    {name: 'peter', score: 9.1},
]

const bomAluno = aluno => aluno.score >= 9
const pontos = valor => valor.score
const avg = (acc, el, i, arr) => {
	if(i === arr.length - 1) {
		return (acc + el) / arr.length
	}
	else {
		return acc + el
	}
}

console.log(
	alunos
		.filter(bomAluno)
		.map(pontos)
		.reduce(avg)
)
