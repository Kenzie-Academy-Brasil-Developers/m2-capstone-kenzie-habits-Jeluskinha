import Requests from "../controller/request.controller.js"

export default class Habits{

    static async adicionarLista(){
        const lista = await Requests.readAll()
        console.log(lista)
    
        //selecionar html
        const tabela = document.querySelector(".tabela__cabecalho")
       
        lista.forEach((item) => {
    
             //criar elementos lista de tarefas
            const linhaTabela = document.createElement("tr")
            const celulaCheckbox = document.createElement("td")
            const checkbox = document.createElement("input")
            const celulaTitulo = document.createElement("td")
            const titulo = document.createElement("p")
            const celulaDescricao = document.createElement("td")
            const descricao = document.createElement("p")
            const celulaCategoria = document.createElement("td")
            const categoria = document.createElement("p")
            const tabelaOpcoes = document.createElement("td")
            const opcoes = document.createElement("button")
    
    
            //adicionar classes
            linhaTabela.classList.add("tarefa")
            celulaCheckbox.classList.add("tarefa__cumprido--checkbox")
            checkbox.classList.add("tarefa__cumprido--check")
            celulaTitulo.classList.add("tarefa__titulo")
            titulo.classList.add("tarefa__titulo--texto")
            celulaDescricao.classList.add("tarefa__descricao")
            descricao.classList.add("tarefa__descricao--texto")
            celulaCategoria.classList.add("tarefa__categoria")
            categoria.classList.add("tarefa__categoria--box")
            tabelaOpcoes.classList.add("tarefa__opcoes")
            opcoes.classList.add("tarefa__opcoes--botao")
        
            titulo.innerText = ""
            descricao.innerText = ""
            categoria.innerText = ""
            opcoes.innerHTML = "..."
        
            tabelaOpcoes.append(opcoes)
            celulaCategoria.append(categoria)
            celulaDescricao.append(descricao)
            celulaTitulo.append(titulo)
            celulaCheckbox.append(checkbox)
            linhaTabela.append(tabelaOpcoes,
                        celulaCategoria,
                        celulaDescricao,
                        celulaTitulo,
                        celulaCheckbox)
            tabela.append(linhaTabela)
        
        })
     }
}
