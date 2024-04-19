import axios from 'axios';

const Service = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000
});

let Auth = {
    async login(email, password) {
        try {
            let response = await Service.post("/api/login", {
                email: email,
                password: password
            })
            /* console.log("a: ", response.data) */
            if (response.data.success === true) {
                localStorage.setItem("user", JSON.stringify({email: email, password: password}));
                console.log(localStorage.getItem("user"))
            }
        } catch (error) {
            console.error("error login: ", error.response.status);
            return {
              false: false,
              error: error.response.status,
            };
        }
    }
}

export {Service, Auth};