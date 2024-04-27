import axios from "axios";
import { useContext } from "react";
import getUserData from "./getUserData";

const Service = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
});
const ServiceAuth = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
});

Service.interceptors.request.use((request) => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  //console.log("token123: ", token);

  try {
    request.headers["Authorization"] = "Bearer " + token;
  } catch (e) {
    console.error(e);
  }
  return request;
});

Service.interceptors.response.use(
  (response) => {
    console.log("interceptor response: ", response.data.user);
    /* if (response.data && response.data.user) {} */

    return response;
  },
  (error) => {
    console.log("err interceptor response: ", error);
    if (error?.response?.status == 401 || error?.response?.status == 403) {
      console.log("error token: ", error);
      Auth.logout();
    }
  }
);

let Auth = {
  async login(email, password) {
    try {
      let response = await ServiceAuth.post("/api/login", {
        email: email,
        password: password,
      });
      //console.log("login response data: ", response.data.user);
      if (response.data.success === true) {
        localStorage.setItem("user", JSON.stringify(response.data.user));

        //document.cookie = JSON.stringify({"token": response.data.token})
        //console.log(localStorage.getItem("user"))

        return response.data;
      }
    } catch (error) {
      console.error("error login: ", error);
      return {
        false: false,
        error: error.response,
      };
    }
  },
  async register(firstname, lastname, email, username, password) {
    try {
      let response = await ServiceAuth.post("/api/register", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
      });
      //console.log("register response data: ", response.data.success);
      if (response.data.success === true) {
        localStorage.setItem(
          "user",
           JSON.stringify(response.data.user)
        );
        
        return response.data;
      }
    } catch (error) {
      console.error("error register: ", error);
      return {
        false: false,
        error: error,
      };
    }
  },
  logout() {
    localStorage.removeItem("user");
  },

  getUser() {
    if (JSON.parse(localStorage.getItem("user"))) {
      return true;
    } else false;
  },

  authenticated() {
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      let user = JSON.parse(localStorage.getItem("user"));
      //console.log("authenticated user: ", user);
      return true;
    } else return false;
  },

  state: {
    get authenticate() {
      return Auth.authenticated();
    },
  },
};

export { Service, ServiceAuth, Auth };
