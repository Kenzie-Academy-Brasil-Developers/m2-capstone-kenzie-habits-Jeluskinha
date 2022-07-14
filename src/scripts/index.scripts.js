import Requests from "../controller/request.controller.js"

const form = document.querySelector("form")


async function login(e){
    e.preventDefault()
    
    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))
    
    await Requests.login(formDataObj)

    const responseResultado = await Requests.login(formDataObj)
    
    if(responseResultado===undefined){
        console.error("ACESSO NEGADO")
        const alert = document.querySelector(".closebtn")
        alert.parentElement.style.display = "unset"
    } else{window.location.href = "./src/views/dashboard.views.html"}
}
form.addEventListener('submit', login)


//Login =>    grupo4Bert@mail.com   
//Senha =>    c591a310586db710e731563186e1857c

