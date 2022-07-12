import Requests from "../controller/request.controller.js"

const form = document.querySelector("form")

form.addEventListener('submit', login)

async function login(e){
    e.preventDefault()

    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))
    console.log(formDataObj)
    
    await Requests.login(formDataObj)
    
}