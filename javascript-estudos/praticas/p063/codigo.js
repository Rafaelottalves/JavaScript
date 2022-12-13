// g - global (encontra todas as ocorrências)
// i - insensitive 
// (()()) - grupos
// | - ou

const txt = 'João trouxe    flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome. Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente. maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo. Tambem né! Sendo a boa mineira que é, nunca esquece seu famoso pao de queijo. Não canso de ouvir a maria:'
"Jooooooooooãoooooooooo, o café ta prontinho aqui. Veeeem!"

const reg = /(joão)/gi

// console.log(txt)
// console.log(txt.match(reg))
// console.log(txt.replace(reg, '<b>$1</b>'))
// console.log(txt.replace(reg, function(input) {
//     return 'mario ' + input.toUpperCase()
// }))
