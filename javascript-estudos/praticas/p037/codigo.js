let estudantes = [
    {name:'jake', score:6.4},
    {name:'susan', score:8.6},
    {name:'emma', score:9.4},
    {name:'peter', score:9.1},
]

const bomAluno = aluno => aluno.score >= 9

console.log(estudantes.filter(bomAluno))
