let dadosCadastro = []

function pegaDados() {
    let nomeCadastro = document.getElementById('entrada-nome').value
    let emailCadastro = document.getElementById('entrada-email').value 
    let senhaCadastro = document.getElementById('entrada-senha').value
    
    let dados = {
        nome: nomeCadastro,
        email: emailCadastro,
        senha: senhaCadastro
    }

    dadosCadastro.push(dados)

    let form = document.querySelector('.formulario')
    form.reset()

    window.location.href = '../pag-inicio/index.html'
}

function validação() {
    let emailLogin = document.getElementById('entrada-email-login')
    let senhaLogin = document.getElementById('entrada-senha-login')

    console.log(emailLogin)
}