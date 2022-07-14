import Habits from "../models/dom.models.js";
import Requests from "../controller/request.controller.js"
import Modal from "../models/modal.models.js";

Habits.adicionarLista()

Modal.clicarCriar()
Modal.clicarEditarHabito()
//Modal.clicarExcluir()


const formCriarHabito = document.querySelector("#modal__form__CriarHabito")

async function criarHabito(e){
    e.preventDefault()
    
    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))

    const novoHabito = await Requests.createHabit(formDataObj)
    return novoHabito.habit_id
}
formCriarHabito.addEventListener('submit', criarHabito)

////////

const formEditarHabito = document.querySelector("#modal__editarHabito")

async function editarHabito(e){
    e.preventDefault()
    
    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))
    console.log(formDataObj);

    const criarId = await criarHabito(e)

    const editado = await Requests.updateHabit(formDataObj, criarId)
    console.log(editado);
}
formEditarHabito.addEventListener('submit', editarHabito)

////////

const formMudarPefil = document.querySelector("#modal__form__editarPerfil")

async function mudarPefil(e){
    e.preventDefault()
    
    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))

    const responseResultado = await Requests.updateProfile(formDataObj)

    const avatar1 = document.querySelector(".usuario__header1__userAvatar1")
    const avatar2 = document.querySelector(".usuario__header2__userAvatar2")
    const nomeUsuario = document.querySelector(".usuario__header2__nomeUsuario")
    avatar1.src = responseResultado.usr_image
    avatar2.src = responseResultado.usr_image
    nomeUsuario.innerText = responseResultado.usr_name
}
formMudarPefil.addEventListener('submit', mudarPefil)


//FALTA FINALIZAR

// const checkCumprido = document.querySelector(".tarefa__cumprido--check")

// async function check(e){
//     e.preventDefault()

//    if(e.target.checked){

//     const complete = await Requests.completeHabit(id)
//     console.log(complete);
//    }

// }
// checkCumprido.addEventListener('change', check)
