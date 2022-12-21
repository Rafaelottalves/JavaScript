class Inimigo {
    constructor (atack, vida, recVida) {
        this.ataque = atack
        this.vida = vida
        this.recuperacao = recVida
        this.vidaInicial = vida
    }
}

class Amigo {
    constructor (atack, vida, recVida) {
        this.ataque = atack
        this.vida = vida
        this.recuperacao = recVida
        this.vidaInicial = vida
    }
}

let inimigo = new Inimigo(2, 8, 1)
let amigo = new Amigo(3, 6, 2)

let fight = (function() {
    let timer  = setInterval(() => {
        let acao = Math.floor(Math.random() * 4)
    
        if(amigo.vida > 0 && inimigo.vida > 0) { // Vivo
            if(acao == 0) { // Inimigo ataca amigo
                amigo.vida -= inimigo.ataque

                if(amigo.vida < 0) {
                    amigo.vida = 0
                }

                else {
                    console.log(`O inimigo te deu ${inimigo.ataque} de dano. Agora te resta ${amigo.vida} de vida`)
                }
            }
    
            else if(acao == 1) { // Amigo ataca inimigo
                inimigo.vida -= amigo.ataque

                if(inimigo.vida < 0) {
                    inimigo.vida = 0
                }

                else {
                    console.log(`Você deu ${amigo.ataque} de dano no inimigo. Agora ele ta com ${inimigo.vida} de vida`)
                }
            }
    
            else if(acao == 2) {// inimigo recupera vida
                inimigo.vida += inimigo.recuperacao

                if(inimigo.vida >= inimigo.vidaInicial) {
                    inimigo.vida = inimigo.vidaInicial

                    console.log('O inimigo ja esta com a vida cheia, o processo de recuperação foi anulado')
                }

                else {
                    console.log(`O inimigo recuperou ${inimigo.recuperacao} de vida. Agora ele esta com ${inimigo.vida} de vida`)
                }
            }
    
            else { // amigo recupera vida
                amigo.vida += amigo.recuperacao

                if(amigo.vida >= amigo.vidaInicial) {
                    amigo.vida = amigo.vidaInicial

                    console.log('Como a sua vida ja esta cheia a recuperação foi anulada')
                }
                
                else {
                    console.log(`Você recuperou ${amigo.recuperacao} de vida. Agora esta com ${amigo.vida} de vida`)
                }
            }
        }
    
        else { // Morto
            setTimeout(() => {
                    if(amigo.vida <= 0) { // Amigo morto
                    console.log('VOCÊ PERDEU!!')
                }
    
                else { // Inimigo morto
                    console.log('VOCÊ GANHOU!!')
                }
    
                clearInterval(timer)
            })
        }
    }, 4000)
})()

/* 
LISTA DE CLASSE ONDE ESCOLHE UM VALOR ALEATORIO DESSA LISTA QUE SERÁ O INIMIGO: [inimigoFraco, inimigoForte, boss] -> escolherndo um inimigo aleatorio pra dropar -> inimigoForte (vida: 12, dano: 5, recup: 4 <- propriedades da classe inimigo forte)

vc matou inimigo forte

escolhendo outro -> inimigofraco (vida: 5, dano: 2, recup: 2 <- propriedades da classe inimigo forte)

quando derrotar certa quantidade de inimigo o boss éescolhido automaticamente?

setTimeout + setInterval

cada propriedade vai ter um inimigo diferente com lista
 */

