export default class Modal {

    static clicarCriar(){

        const btnCriar = document.querySelector(".__boxButtons--Titulo--modelo2")
        const modal = document.getElementById("modal__criarHabito")
        
        btnCriar.addEventListener("click", (evt)=>{
            modal.style.display = "block"
        })
    }
    static fecharCriar(){

        const btnFechar = document.querySelector(".modal__close")
        const modal = document.getElementById("modal__criarHabito")
        
        btnFechar.addEventListener("click", (evt)=>{
            modal.style.display = "none"
        })
    }

    static clicarEditarHabito(){
        const editarHabito = document.getElementById("criarHabito")
        const modal = document.getElementById("modal__editarHabito")
        
        editarHabito.addEventListener("click", (evt)=>{
            modal.style.display = "block"
        })
    }

    static clicarEditarPerfil(){
        // const botaoEditPerfil = document.querySelector(".button__editarPerfil")
        // const modal = document.getElementById("modal__editarPerfil")
        
        // btnCriar.addEventListener("click", (evt)=>{
        //     modal.style.display = "block"
        // })
        
        // botaoEditPerfil.addEventListener("click", this.clicarEditarPerfil())
    }

    static clicarExcluir(){
        // const btnExcluir = document.getElementById("submit__excluirEdicao")
        
        // btnExcluir.addEventListener("click", (evt)=>{
        //     // modal.style.display = "block"
        // })
    }
}