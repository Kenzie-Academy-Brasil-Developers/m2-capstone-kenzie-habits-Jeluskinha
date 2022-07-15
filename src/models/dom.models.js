
import Requests from "../controller/request.controller.js"

export default class Habits{

    static async adicionarLista(){

        const lista = await Requests.readAll()    

        //selecionar html
        const tabela = document.querySelector(".tasks")
       
        lista.forEach((item) => {
            
             //criar elementos lista de tarefas
            const linhaTabela = document.createElement("li")
            const check = document.createElement("input")
            const titulo = document.createElement("p")
            const descricao = document.createElement("p")
            const categoria = document.createElement("span")
            const opcoes = document.createElement("button")
    
    
            //adicionar classes
            linhaTabela.classList.add("task__linha")
            check.classList.add("task__check")
            titulo.classList.add("task__title")
            descricao.classList.add("task__description")
            categoria.classList.add("task__category")
            opcoes.classList.add("task__edit")
        
            linhaTabela.id = item.habit_id
            check.type = "checkbox"
            check.id = item.habit_id
            titulo.innerText = item.habit_title
            descricao.innerText = item.habit_description
            categoria.innerText = item.habit_category
            opcoes.innerHTML = "..."
        
            linhaTabela.append(check,titulo,descricao,categoria,opcoes)
            tabela.append(linhaTabela)
            // tabela.innerHTML = ""
            // return tabela
        })

    
     }
}

