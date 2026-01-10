// import { useEffect, useState } from "react";
// import "./DiscoverUsers.css";

// export default function DiscoverUsers() {
//   const [users, setUsers] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetch("http://localhost:5000/api/users", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   const sendRequest = async (id) => {
//     await fetch("http://localhost:5000/api/connections/send", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ receiver_id: id }),
//     });

//     alert("Connection request sent");
//   };

//   return (
//     <div className="discover-page">
//       <h1 className="discover-title">Discover People</h1>

//       <div className="discover-grid">
//         {users.map((user) => (
//           <div className="user-card" key={user.id}>
//             <div className="user-avatar">
//               {user.name.charAt(0)}
//             </div>

//             <h3>{user.name}</h3>
//             <p>{user.email}</p>

//             <button onClick={() => sendRequest(user.id)}>
//               Connect
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // import { useEffect, useState } from "react";
// // import "./DiscoverUsers.css";

// // export default function DiscoverUsers() {
// //   const [users, setUsers] = useState([]);
// //   const [error, setError] = useState("");
// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     if (!token) {
// //       setError("Please login first");
// //       return;
// //     }

// //     fetch("http://localhost:5000/api/users", {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     })
// //       .then(async (res) => {
// //         if (!res.ok) {
// //           const err = await res.json();
// //           throw new Error(err.message || "Unauthorized");
// //         }
// //         return res.json();
// //       })
// //       .then((data) => {
// //         if (Array.isArray(data)) {
// //           setUsers(data);
// //         } else {
// //           setUsers([]);
// //         }
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //         setError(err.message);
// //         setUsers([]);
// //       });
// //   }, [token]);

// //   if (error) {
// //     return <p style={{ padding: 20, color: "red" }}>{error}</p>;
// //   }

// //   return (
// //     <div className="discover-page">
// //       <h1 className="discover-title">Discover People</h1>

// //       <div className="discover-grid">
// //         {users.length === 0 && <p>No users found</p>}

// //         {users.map((user) => (
// //           <div className="user-card" key={user.id}>
// //             <div className="user-avatar">
// //               {user.name.charAt(0)}
// //             </div>

// //             <h3>{user.name}</h3>
// //             <p>{user.email}</p>

// //             <button>Connect</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
import { useEffect, useState } from "react";
import "./DiscoverUsers.css";

export default function DiscoverUsers() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [token]);

  const sendRequest = async (id) => {
    await fetch("http://localhost:5000/api/connections/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ receiver_id: id }),
    });

    alert("Connection request sent");
  };

  return (
    <div className="discover-page">
      <h1>Discover People</h1>

      <div className="discover-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => sendRequest(user.id)}>
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
