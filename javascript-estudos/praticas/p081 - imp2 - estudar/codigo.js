class Produto {
    constructor () {
        this.id = 1
        this.arrProd = []
    }

    salvar() { // start here
        let produto = this.lerDados()

        if(this.validaCampo(produto)) {
            this.adicionar(produto)
        }

        this.listaTabela()
        this.cancelar()
    }

    listaTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = ''

        for(let i = 0;i < this.arrProd.length;i++) {
            let tr = tbody.insertRow() // CODIGO NOVO - Cria uma nova linha na tabela
            let td_id = tr.insertCell() // CODIGO NOVO - Insere uma nova coluna
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerHTML = this.arrProd[i].id
            td_produto.innerHTML = this.arrProd[i].nomeProd
            td_valor.innerHTML = this.arrProd[i].preco

            td_id.classList.add('center') // CODIGO NOVO - adicioanr uma classe

            let iconEdit = document.createElement('i')
            iconEdit.setAttribute('class', 'fa-solid fa-pen-to-square iconSty')

            let iconDelete = document.createElement('i')
            iconDelete.setAttribute('class', 'fa-solid fa-trash iconSty')
            iconDelete.setAttribute('onclick', 'produto.deletar('+ this.arrProd[i].id +')') // NOVO CODIGO

            td_acoes.appendChild(iconEdit)
            td_acoes.appendChild(iconDelete)

            console.log(this.arrProd)
        }
    }

    adicionar(produto) {
        this.arrProd.push(produto)
        this.id++
    }

    lerDados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProd = document.getElementById('produto').value
        produto.preco = document.getElementById('preco').value

        return produto
    }

    validaCampo(produto) {
        let msg = ''

        if(produto.nomeProd == '') {
            msg += 'Informe o nome do produto \n'
        }

        if(produto.preco == '') {
            msg += 'Informe o preço do produto \n'
        }

        if(msg != '') {
            alert(msg)

            return false
        }

        return true
    }

    cancelar() {
        document.getElementById('produto').value = ''
        document.getElementById('preco').value = ''
    }

    deletar(id) {
        if(confirm('Deseja realmente deletar o produto ' + id)) {
            let tbody = document.getElementById('tbody')

            for(let i = 0;i < this.arrProd.length;i++) {
                if(this.arrProd[i].id == id) {
                    this.arrProd.splice(i, 1)
                    tbody.deleteRow(i) // NOVO CODIGO - Deleta a linha da tabela pelo indice
                }
            }

            if(this.arrProd.length == 0) {
                this.id = 1
            }

            console.log(this.arrProd)
        }
    }
}

let produto = new Produto()
