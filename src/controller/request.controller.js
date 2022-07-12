export default class Requests {
    // static token = JSON.parse(localStorage.getItem("@kenzie-habits:token"))

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
            .then(res => console.log(res))
            .then(res => {
            localStorage.setItem("@kenzie-habits:user", JSON.stringify(res.response))
            localStorage.setItem("@kenzie-habits:token", JSON.stringify(res.token))
            return res
            })
            .catch(err => console.log(err))
            return response
          } 
}

