/* 
const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const reg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z])(?!\1)|[!@#$%;*(){}_+^&]){6,}$/
*/

/* 

// estrategia: primeiro começar a povoar minhas redes sociais, depois meu github, depois fazer meu site portfolio e por ultimo minha conta no linkedin

// DEIXAR MAIS VISUAL, DEPOIS ADICIONAR MAIS FUNCIONALIDADE E DEPOIS DEIXAR AINDA MAIS VISUAL
// outros inimigos, com nomes, o inimigo será só a base

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
    console.log(`Sua Vida: ${amigo.vida} | Vida inimiga: ${inimigo.vida} \nSua dano: ${amigo.ataque} | Dano inimigo: ${inimigo.ataque} \n------------------------------`)


    let timer  = setInterval(() => {
        let acao = Math.floor(Math.random() * 4)
    
        if(amigo.vida > 0 && inimigo.vida > 0) { // problema
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
    
        else {
            setTimeout(() => {
                    if(amigo.vida <= 0) {
                    console.log('VOCÊ MORREU!!')
                }
    
                else {
                    console.log('PARABENS VOCÊ GANHOU!! CONSEGUIU MATAR O INIMIGO')
                }
    
                clearInterval(timer)
            })
        }
    }, 4000)
})()
// NOVOS CONSOLES.LOG
// setTimeout + setInterval
 */

/* LISTA DE CLASSE ONDE ESCOLHE UM VALOR ALEATORIO DESSA LISTA QUE SERÁ O INIMIGO: [inimigoFraco, inimigoForte, boss] -> escolherndo um inimigo aleatorio pra dropar -> inimigoForte (vida: 12, dano: 5, recup: 4 <- propriedades da classe inimigo forte)

vc matou inimigo forte

escolhendo outro -> inimigofraco (vida: 5, dano: 2, recup: 2 <- propriedades da classe inimigo forte)

quando derrotar certa quantidade de inimigo o boss éescolhido automaticamente?
 */
