// verificar se o login esta correto: se sim - colocar foto de perfil e outras infos dependendo de quem é o usuario, se não - mensagem dizendo o que esta incorreto (senha ou email)

const login = {
    email: 'rafaelott12345@gmail.com',
    senha: 'BIGBANG1',
}

const user = {
    nome: 'Rafael',
    idade: 18,
    sexo: 'M',
    foto: 'https://cdn.pixabay.com/photo/2022/10/05/20/43/hyacinth-macaw-7501470_960_720.jpg'
}

function verifLogin(email, senha) {
    if(email == login.email && senha == login.senha) {
        for(let i in user) {
            if(user.foto != user[i]) {
                console.log(user[i])
            }
        }
    } else {
        console.log('Email ou senha incorreto')
    }
}

let email = 'rafaelott12345@gmail.com'
let senha = 'BIGBANG1'

verifLogin(email, senha)
