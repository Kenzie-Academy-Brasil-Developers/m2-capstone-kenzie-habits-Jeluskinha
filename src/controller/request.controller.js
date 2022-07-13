export default class Requests {
  static token = JSON.parse(localStorage.getItem("@kenzie-habits:token"))

  static async login(loginData) {
    const base_url = "https://habits-kenzie.herokuapp.com/api/userLogin"

    const response = await fetch(base_url,
      {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("@kenzie-habits:user", JSON.stringify(res.response.usr_email))
        localStorage.setItem("@kenzie-habits:token", JSON.stringify(res.token))
        return res
      })
      .catch(err => console.log(err))
    return response
  }
  static async updateProfile(imagemUsuarioURL) {
    const base_url = "https://habits-kenzie.herokuapp.com/api/user/profile"

    const response = await fetch(base_url,
      {
        method: 'PATCH',
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(imagemUsuarioURL),
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => res)
      .catch(err => console.log(err))
      return response
  }
  static async createHabit(criarHabito) {
    const base_url = "https://habits-kenzie.herokuapp.com/api/habits"

    const response = await fetch(base_url,
      {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(criarHabito),
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => res)
      .catch(err => console.log(err))
    return response
  }
  static async readAll() { 
    const base_url = "https://habits-kenzie.herokuapp.com/api/habits"

    fetch(base_url,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.token}`
        },
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => res)
      .catch(err => console.log(err))
  }
  static async readByCategory(categoria) {
const base_url = `https://habits-kenzie.herokuapp.com/api/habits/category/${categoria}`

    fetch(base_url,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.token}`
        },
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => res)
      .catch(err => console.log(err))
   
  }
  static async updateHabit(atualizarHabito, id) {
    const base_url = `https://habits-kenzie.herokuapp.com/api/habits/${id}`

    const response = await fetch(base_url,
      {
        method: 'PATCH',
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(atualizarHabito),
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => res)
      .catch(err => console.log(err))
    return response
  }
  static async completeHabit(id) {
    const base_url = `https://habits-kenzie.herokuapp.com/api/habits/complete/${id}`

    const response = await fetch(base_url,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${this.token}`
        },
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => res)
      .catch(err => console.log(err))
    return response
  }
  static async deleteHabit(id) {
    const base_url = `https://habits-kenzie.herokuapp.com/api/habits/${id}`

    const response = await fetch(base_url,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${this.token}`
        },
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => res)
      .catch(err => console.log(err))
    return response
  }
}
    // *****teste updateProfile  --OK
// const imagemUsuarioURL = {  
//   usr_image: "https://www.google.com/images/Kammer"
// }

// console.log(Requests.updateProfile(imagemUsuarioURL))

      // *****createHabit  --OK
// const criarHabito = {
//   habit_title: "bater ponto corretamente",
//   habit_description: "bater ponto todos os dias nos horários corretos",
//   habit_category: "Saude"
// }
// Requests.createHabit(criarHabito)

      //*****readAll  --OK
console.log(Requests.readAll())

      //*****readByCategory  --OK
// Requests.readByCategory()

     //*****updateHabit  --OK
// const atualizarHabito = {
// 	"habit_title": "Jogar volei aos domingos no parque Marina",
// 	"habit_description": "Ir aos domingos com a família no parque Marina e aproveitar para jogar vôlei de areia",
// 	"habit_category": "lazer"
// }
// Requests.updateHabit(atualizarHabito)

    //*****completeHabit  --OK
//Requests.completeHabit(1)

    //*****deleteHabit  --OK
//Requests.deleteHabit(1)