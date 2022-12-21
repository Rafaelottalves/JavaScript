let btn = document.getElementById('btn')

function verifLogin() {
    let email = document.getElementById('t-email').value
    let senha = document.getElementById('t-senha').value

    class Login {
        constructor (email, senha) {
            this.email = email
            this.senha = senha
        }

        verifConta() {
            let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            let regSenha = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z])(?!\1)|[!@#$%;*(){}_+^&]){6,}$/

            let contasAdm = ['contaAdm1@gmail.com', 'contaAdm2@gmail.com']

            if(regEmail.test(this.email) && regSenha.test(this.senha)) {
                if(contasAdm.indexOf(this.email) != -1) {
                    login.isAdm()
                }

                else {
                    login.isUsuario()
                }
            }

            else {
                alert('E-mail ou senha incorretos. Tente novamente')
            }
        }

        isAdm() {
            let admMode = document.getElementById('container-token')
            let p = document.createElement('span')
            let input = document.createElement('input')

            admMode.appendChild(p).innerHTML = 'Adicione o seu token de admin'
            admMode.appendChild(input).style.cssText = `display: block; margin-top: 5px`

            btn.style.display = 'none'

            let newBtn = document.createElement('input')
            newBtn.style.marginTop = '10px'
            newBtn.setAttribute('type', 'button')
            newBtn.setAttribute('value', 'Verificar Token')

            newBtn.addEventListener('click', function() {
                let tokenList = ['jjk4134v01', 'ladib376dfb02']

                if(tokenList.indexOf(input.value) != -1) {
                    alert('Entrando como administrador')
                }

                else {
                    alert('Token incorreto. Tente novamente')
                }
            })

            admMode.appendChild(newBtn)
        }

        isUsuario() {
            alert('Entrando como um usuario')
        }
    }

    let login = new Login(email, senha)
    login.verifConta()
}

btn.addEventListener('click', verifLogin)
