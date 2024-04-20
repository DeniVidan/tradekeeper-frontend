import axios from "axios";


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
    //console.log("response: ", response);
    if (response.data && response.data.user) {
      // Use the UserContext to store the user data
      const { storeUser } = useContext(UserContext);
      storeUser(response.data.user);
    }
    return response;
  },
  (error) => {
    console.log("sad: ", error);
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
      console.log("a: ", response.data);
      if (response.data.success === true) {
        localStorage.setItem(
          "user",
          JSON.stringify({ token: response.data.token })

          
        );

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
  async register(email, password) {
    try {
      let response = await ServiceAuth.post("/api/register", {
        email: email,
        password: password,
      });
      console.log("a: ", response.data);
      if (response.data.success === true) {
        localStorage.setItem(
          "user",
          JSON.stringify({ token: response.data.token })
        );
        console.log(localStorage.getItem("user"));
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

  async initUser() {
    try {
      let response = await Service.get("/api/init_user_data", {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user"))?.token
          }`,
        },
      });
      console.log("user: ", response.data.user);
    } catch (error) {
      console.log("err2: ", error);
    }
  },

  getUser() {
    if (JSON.parse(localStorage.getItem("user"))) {
      return true;
    } else false;
  },

  authenticated() {
    let user = Auth.getUser();
    if (user) {
      return true;
    }
    return false;
  },

  state: {
    get authenticate() {
      return Auth.authenticated();
    },
  },
};

export { Service, ServiceAuth, Auth };
