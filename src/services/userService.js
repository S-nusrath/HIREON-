// const API = "http://localhost:8080/api/users";

// export const getUsers = async () => {
//   const res = await fetch(API);
//   return res.json();
// };
// import axios from "axios";

// const API = "http://localhost:8080/api/users";

// export const getMyProfile = async () => {

//   const token = localStorage.getItem("token");

//   const res = await axios.get(`${API}/me`, {
//     headers:{
//       Authorization:`Bearer ${token}`
//     }
//   });

//   return res.data;
// };
// const API = "http://localhost:8080/api/users";

// export const getAllUsers = async () => {
//   const res = await fetch(`${API}`);
//   return res.json();
// };
const API = "http://localhost:8080/api/users";

export const getAllUsers = async () => {
  const res = await fetch(API);
  return res.json();
};