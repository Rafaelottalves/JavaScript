/* Relembrar Regex
praticar no regexr !
ver as anotações !
praticar no javascript !
rever videos (praticar) !
exercicios ?
praticar no javascript
*/

//switch - grid - while -

//quando terminar regex voltar no video do guanas em que ele usa regex

//expressao regular + função + grupos == Muito Poder

// depois que terminar regex fazer desafios no codewars e depois fazer aquele teste do card usando       -> javascript <- 


// comentar o codigo - 

// split e string

//pra praticar fazer exercicios no codewar

/* beber mais agua, correr (4:45) as vezes campo, comer menos no geral, me exercitar ,estudar igual um louco, banho gelado */

/* 
menos exercicios mais constancia (ir aumentando aos poucos):
2 peso (25 cada braço) - cadeira (25) - flexão (50) - flexão fechada (25) - barra normal (40) - trapezio (50) - puxe cima (30)

*/

// split, matchAll, replaceAll, String - estudar!!

// match encontra todas as ocorrencias e joga dentro de um array

// estudar mais filter, map, reduce


//studar filter, map e reduce junto de regex
//depois disso praticar
// depois fazer exercicios
// depois terminou, vamo pro proximo
 
// .dotall??

let arr = ['rafael', 'joao', 'pedro', 'janaina', 'sadie', 'debora', 'rudi', 'renata']

let reg = /\br\w+/g

let valid = arr.filter((item) => item.match(reg))

console.log(valid)
