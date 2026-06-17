// // import axios from "axios";

// // const API = axios.create({
// //   baseURL: "http://localhost:8080/api", // backend url
// // });

// // export const loginUser = async (data) => {
// //   const res = await API.post("/auth/login", data);
// //   return res.data;
// // };

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8080/api",
// });

// // LOGIN
// export const loginUser = async (data) => {
//   const res = await API.post("/users/login", data);
//   return res.data;
// };

// // REGISTER
// export const registerUser = async (data) => {
//   const res = await API.post("/users/register", data);
//   return res.data;
// };
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// LOGIN
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

// REGISTER
export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

// GET CURRENT USER PROFILE
// export const getMyProfile = async () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const res = await fetch(
//     `http://localhost:5000/api/users/me?email=${user.email}`
//   );

//   return res.json();
// };/
export const getMyProfile = async () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return user;
};

export default API;