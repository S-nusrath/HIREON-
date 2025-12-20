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
  }, []);

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
      <h1 className="discover-title">Discover People</h1>

      <div className="discover-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-avatar">
              {user.name.charAt(0)}
            </div>

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
