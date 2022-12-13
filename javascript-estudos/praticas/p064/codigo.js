// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,} no mínimo 10
// {,10} de 0 a 10
// {5,10} de 5 a 10
// {10}
// [abc] -> Conjunto [^] -> Negação
// [0-9]
// [min-maxQUALQUERCOISA] 
// [^min-maxQUALQUERCOISA] -> Tudo menos isso

/* const html = '<p>Olá mundo</p> <div>Olá de novo</div>'

console.log(html.match(/<.+?>.+?<\/.+?>/g))

const txt = 'João trouxe    flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome. Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente. maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo. Tambem né! Sendo a boa mineira que é, nunca esquece seu famoso pao de queijo. Não canso de ouvir a maria: Jooooooooooãoooooo , o café ta prontinho aqui. Veeeem!'

const arquivos = [
    'Atenção.jpg',
    'FOTO.jpeg',
    'Meu gatinho.jpg',
    'Meu gatinho.JPG',
    'Meu gatinho.JPEG',
    'Meu gatinho.JPeeeeEEEeeeeeeeeeG',
    'Marido.png',
    'lista de compras.txt',
]*/

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ®¡ 0123456789 ¡'

console.log(alfabeto.match(/\W+\S+/g))
