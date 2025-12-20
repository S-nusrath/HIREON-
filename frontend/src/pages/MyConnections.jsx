/*import { useEffect, useState } from "react";
import { getConnections } from "../api/connections.api";

export default function MyConnections() {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    getConnections().then((res) => setConnections(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">My Connections</h2>
      {connections.map((c, i) => (
        <div key={i} className="border p-3 rounded mb-2">
          Connection ID: {c.id}
        </div>
      ))}
    </div>
  );
}
*/
import { useEffect, useState } from "react";
import "./MyConnections.css";

const MyConnections = () => {
  const [connections, setConnections] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/connections", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setConnections(data));
  }, []);

  return (
    <div className="connections-page">
      <h1 className="page-title">My Connections</h1>

      {connections.length === 0 ? (
        <p className="empty-text">You don’t have any connections yet.</p>
      ) : (
        <div className="connections-grid">
          {connections.map((conn) => (
            <div className="connection-card" key={conn.id}>
              <div className="avatar">
                {conn.name?.charAt(0) || "U"}
              </div>

              <h3>{conn.name || "User"}</h3>
              <p>{conn.email || "user@email.com"}</p>

              <span className="badge">Connected</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyConnections;
