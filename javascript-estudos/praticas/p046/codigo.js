// Fazer uma tela de login que entre com dados e foto dependendo do login
// Fazer possivel se cadastrar, colocar seus dados e guardar
// Fazer um sistema de Cadastro - Login

function first(arr, n) {
    let valores = []
    
    if(n == undefined) {
      valores.push(arr[0])
    } else {
      for(let c = 0;c < n;c++) {
        valores.push(arr[c])
      }
    }
    
    return valores
}

console.log(first(['a', 'b', 'c', 'd', 'e'], 5))