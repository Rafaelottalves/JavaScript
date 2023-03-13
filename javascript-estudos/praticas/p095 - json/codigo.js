/* bibliotecas nativas js */
/* o que é, como funciona 
estudar XML igual json?*/
/* THROWS/THROW, VOID
O QUE AJAX? AJAX */
/* pegar tudo do site, organizar, deixar o menor e melhor possivel depois fazer isso com outro site e no final comparar os dois, deixar um tirar outro ou juntar os dois */
/* organizar diminuir resumir cada topico, depois comparar os topicos tentar juntalos ou deleta-los pegar o mais importante, excluir o repetido */
/* no final eu fazer o que eu acho que é json... */

const cont_conteudo = document.getElementById('container-conteudo') 

fetch("./dados.json").then((response) => {
    response.json().then((dados) => {
        const keys = Object.keys(dados)
        const values = Object.values(dados)

        function getBatters(values) {
            const objBatters = values.filter((item) => {
                return typeof item == 'object'
            })

            const objBatter = objBatters.filter((item) => {
                return item.batter
            })

            let listObjBatter = objBatter[0].batter

            let listBatter = listObjBatter.reduce((a, b) => {
                a.push(b.type)

                return a
            }, [])

            return listBatter
        }
        const batters = getBatters(values)

        function getTopping(values) {
            const arrFilter = values.filter((item) => {
                return typeof item == 'object' && !item.batter
            })

            let listItemTopping = arrFilter[0].reduce((a, b) => {
                a.push(b.type)

                return a
            }, [])

            return listItemTopping
        }
        const toppings = getTopping(values)

        for(let i = 0;i < keys.length;i++) {
            if(!(typeof values[i] == 'object')) {
                let p = document.createElement('p')

                p.innerHTML = `${keys[i]} - ${values[i]}`

                cont_conteudo.appendChild(p)
            } else {
                let p = document.createElement('p')

                if(keys[i] == 'batters') {
                    p.innerHTML = `${keys[i]} - ${batters}`
                } else {
                    p.innerHTML = `${keys[i]} - ${toppings}`
                }

                cont_conteudo.appendChild(p)
            }
        }
    })
})
/* fazer uma função */
/* arrFilter[0][0] */
