export default class Requests {
    static base_url = "https://habits-kenzie.herokuapp.com/api"
    // static token = JSON.parse(localStorage.getItem("@kenzie-habits:token"))
    static headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`
    }
        static async login(loginData) {
            return await fetch(`${this.base_url}/userLogin`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(loginData)
            })
            .then((res) => {
            return res.json()
            })
            .then((res) => {
            localStorage.setItem("@kenzie-habits:user", JSON.stringify(res.response))
            localStorage.setItem("@kenzie-habits:token", JSON.stringify(res.token))
            console.log(res)
            return res
            })
            .catch(err => console.log(err))
        } 
}