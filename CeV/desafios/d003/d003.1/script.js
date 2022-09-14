function contar() {
    var res = document.getElementById('res')

    var num1 = document.getElementById('num1')
    var n1 = Number(num1.value)

    var num2 = document.getElementById('num2')
    var n2 = Number(num2.value)

    var passo = document.getElementById('passo')
    var pass = Number(passo.value)

    var c = n1

    if(pass <= 0) {
        alert('Valor invalido')
    } 
    
    else if(n1 > n2) {
        alert('começo maior que fim')
    } 
    
    else if(n1 == ' ' || n2 == ' ' || pass == ' ') {
        alert('caixa vazia')
    } 
    
    else if(pass > 0 && n1 < n2) {
        while(c <= n2) {
            c += pass
            res.innerHTML += `${c}`
    
            if(n1 <= n2) {
                res.innerHTML += ' 👉 '
            } else if(n1 > n2) {
                res.innerHTML += ' 🏁 '
            }
        }
    }
}
