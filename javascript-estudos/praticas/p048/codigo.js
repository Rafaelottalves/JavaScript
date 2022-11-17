var usuarios = [
    {
        nome: 'rafael',
        idade: 18
    },
    {
        nome: 'joao',
        idade: 23
    },
    {
        nome: 'maria',
        idade: 32
    }
]

let usuario = {
    posicao: 0,
    get atual() {
        return usuarios[this.posicao]
    },
    set atual(posicao) {
        this.posicao = posicao
    },
    proximo() {
        ++this.posicao
    },
    anterior() {
        --this.posicao
    }
}

usuario.atual = 2
console.log(usuario.atual)

/* 
id
username
features:["logar","editar",...] <- habilidades
*/
