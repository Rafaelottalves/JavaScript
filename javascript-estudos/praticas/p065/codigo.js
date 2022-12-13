// ^ -> Começa com
// $ -> Termina com

/* const cpfs = `
    Os cpfs são:
    254.224.877-45 215.978.456-12 047.258.369-96

    963.987.321-00
`

let reg = /(\d{3}\.){2}\d{3}-\d{2}/g
console.log(cpfs.match(reg)) */

const ips = `
    Os ips são:
    0.0.0.0 <- numeros entre esse 

    192.168.0.25

    10.10.5.12

    255.255.255.255 e esse serão validos
`
const reg = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g

console.log(ips.match(reg))
