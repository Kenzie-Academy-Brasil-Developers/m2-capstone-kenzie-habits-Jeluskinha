export default class Modal {

    static clicarCriar(){

        const btnCriar = document.querySelector(".__boxButtons--Titulo--modelo2")
        const modal = document.getElementById("modal__CriarHabito")
        
        btnCriar.addEventListener("click", (evt)=>{
            modal.style.display = "block"
        })
    }

    static clicarEditarHabito(){
        const editarHabito = document.querySelector(".tarefa__opcoes--botao")
        const modal = document.getElementById("modal__editarHabito")
        
        editarHabito.addEventListener("click", (evt)=>{
            modal.style.display = "block"
        })
    }

    static clicarEditarPerfil(){
        const botaoEditPerfil = document.querySelector(".button__editarPerfil")
        const modal = document.getElementById("modal__editarPerfil")
        
        btnCriar.addEventListener("click", (evt)=>{
            modal.style.display = "block"
        })
        
        botaoEditPerfil.addEventListener("click", this.clicarEditarPerfil())
    }

    static clicarExcluir(){
        const btnExcluir = document.getElementById("submit__excluirEdicao")
        
        btnExcluir.addEventListener("click", (evt)=>{
            // modal.style.display = "block"
        })
    }
}