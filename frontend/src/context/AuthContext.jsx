// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     axios
//       .get("http://localhost:5000/api/auth/me", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setUser(res.data))
//       .catch(() => {
//         localStorage.removeItem("token");
//         setUser(null);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// import { useContext } from "react";

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside AuthProvider");
//   }
//   return context;
// };
// export function useAuth() {
//   return useContext(AuthContext);
// }




import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);
// ✅ LOGOUT FUNCTION
const logout = () => {
  localStorage.removeItem("token"); // remove token
  setUser(null); // reset user state
};

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
  {children}
</AuthContext.Provider>

  );
}

/* ✅ ONLY ONE useAuth — THIS IS IMPORTANT */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
