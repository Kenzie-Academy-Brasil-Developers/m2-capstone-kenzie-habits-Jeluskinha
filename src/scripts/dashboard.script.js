import Habits from "../models/dom.models.js";
import Requests from "../controller/request.controller.js"
import Modal from "../models/modal.models.js";

Habits.adicionarLista()

Modal.clicarCriar()
Modal.clicarEditarHabito()
Modal.clicarExcluir()


const formCriarHabito = document.querySelector("#modal__form__CriarHabito")
async function criarHabito(e){
    e.preventDefault()
    
    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))

    
    await Requests.criarHabito(formDataObj)

    const responseResultado = await Requests.createHabit(formDataObj)
}
formCriarHabito.addEventListener('submit', criarHabito)

////////

const formEditarHabito = document.querySelector("#modal__form__editarHabito")
async function editarHabito(e){
    e.preventDefault()
    
    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))

    
    await Requests.updateHabit(formDataObj)

    const responseResultado = await Requests.updateHabit(formDataObj)
}
formEditarHabito.addEventListener('submit', editarHabito)

////////

const formMudarPefil = document.querySelector("#modal__form__editarPerfil")
async function mudarPefil(e){
    e.preventDefault()
    
    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))

    
    await Requests.updateProfile(formDataObj)

    const responseResultado = await Requests.updateProfile(formDataObj)
}
formMudarPefil.addEventListener('submit', mudarPefil)

