let btn = document.getElementById('btn')

function executaObjeto(usuario) {
    let conteudo = document.getElementById('conteudo')
    conteudo.innerHTML = ''

    let div = document.createElement('div')
    div.setAttribute('class', 'conteudoForm')
    
    div.innerHTML += `${usuario.email} <br>`
    div.innerHTML += `${usuario.senha}`

    conteudo.appendChild(div)
}

btn.addEventListener('click', () => {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let regSenha = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z])(?!\1)|[!@#$%;*(){}_+^&]){6,}$/

    if(regEmail.test(email) && regSenha.test(senha)) {
        executaObjeto(new Usuario(email, senha))
    }

    else {
        alert('Email ou senha incorretos')
    }
})

class Usuario {
    constructor (email, senha) {
        this.email = email
        this.senha = senha
    }
}

