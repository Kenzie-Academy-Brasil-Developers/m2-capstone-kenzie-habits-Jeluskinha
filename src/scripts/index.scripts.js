import Requests from "../controller/request.controller.js"

const form = document.querySelector("form")

form.addEventListener('submit', login)

async function login(e){
    //e.preventDefault()

    //const fData                =  new FormData(e.target)
    const formDataObj          =  {email: "grupo4Bert@mail.com", password:"c591a310586db710e731563186e1857c"}
    //fData.forEach((value, key) => (formDataObj[key] = value))
    //console.log(formDataObj)
    
    await Requests.login(formDataObj)
}
    const responseResultado = await Requests.login(formDataObj)
    console.log(responseResultado)
    
}

login()

