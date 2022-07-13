import Requests from "../controller/request.controller.js"

export default class Habits{

    static async adicionarLista(){

        const lista = await Requests.readAll()    

        //selecionar html
        const tabela = document.querySelector(".containerNav__tabela")
       
        lista.forEach((item) => {
    
             //criar elementos lista de tarefas
            const linhaTabela = document.createElement("tr")
            linhaTabela.id = item.habit_id
            const celulaCheckbox = document.createElement("td")
            const check = document.createElement("input")
            const celulaTitulo = document.createElement("td")
            const titulo = document.createElement("p")
            const celulaDescricao = document.createElement("td")
            const descricao = document.createElement("p")
            const celulaCategoria = document.createElement("td")
            const categoria = document.createElement("p")
            const tabelaOpcoes = document.createElement("td")
            const opcoes = document.createElement("button")
    
    
            //adicionar classes
            linhaTabela.classList.add("containerNav__tarefa__linha")
            celulaCheckbox.classList.add("tarefa__cumprido--checkbox")
            check.classList.add("tarefa__cumprido--check")
            celulaTitulo.classList.add("tarefa__titulo")
            titulo.classList.add("tarefa__titulo--texto")
            celulaDescricao.classList.add("tarefa__descricao")
            descricao.classList.add("tarefa__descricao--texto")
            celulaCategoria.classList.add("tarefa__categoria")
            categoria.classList.add("tarefa__categoria--box")
            tabelaOpcoes.classList.add("tarefa__opcoes")
            opcoes.classList.add("tarefa__opcoes--botao")
        
            check.type = "checkbox"
            titulo.innerText = item.habit_title
            descricao.innerText = item.habit_description
            categoria.innerText = item.habit_category
            opcoes.innerHTML = "..."
        
            tabelaOpcoes.append(opcoes)
            celulaCategoria.append(categoria)
            celulaDescricao.append(descricao)
            celulaTitulo.append(titulo)
            celulaCheckbox.append(check)
            linhaTabela.append(celulaCheckbox,
                              celulaTitulo,
                              celulaDescricao,
                              celulaCategoria,
                              tabelaOpcoes,
                              )
            tabela.append(linhaTabela)
            // tabela.innerHTML = ""
        
        })
     }
}
