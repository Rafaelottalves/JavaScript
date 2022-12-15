// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline

const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive`

console.log(lookahead.match(/.+(?=[^in]active)/gim))
console.log(lookahead.match(/^(?!.+inactive).+$/gim))
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))

const cpf = `
012.250.796-10
111.111.111-11
147.285.963-10`

console.log(cpf.match(/^(?!(\d)\1{2}\.\1{3}\.\1{3}-\1{2})\d{3}\.\d{3}\.\d{3}-\d{2}$/gm))
