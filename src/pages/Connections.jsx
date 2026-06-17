import { useEffect, useState } from "react";
import useConnections from "../hooks/useConnections";
import {
  sendConnectionRequest,
  acceptConnection,
  rejectConnection
} from "../services/connectionService";

export default function Connections() {

  const currentUser = { id: 1 };

  const { connections, loading, reload } = useConnections(currentUser.id);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { id: 2, name: "Arjun Reddy", skill: "React Developer" },
      { id: 3, name: "Priya Patel", skill: "Backend Engineer" }
    ]);
  }, []);

  const connectUser = async (receiverId) => {
    await sendConnectionRequest(currentUser.id, receiverId);
    alert("Connection request sent");
    reload();
  };

  const accept = async (id) => {
    await acceptConnection(id);
    reload();
  };

  const reject = async (id) => {
    await rejectConnection(id);
    reload();
  };

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>Connections</h1>

      <div style={styles.container}>

        {/* Pending Requests */}
        <div style={styles.card}>
          <h2>Pending Requests</h2>

          {loading && <p>Loading...</p>}

          {connections.length === 0 && (
            <p style={styles.empty}>No pending requests</p>
          )}

          {connections.map((req, index) => (
            <div key={index} style={styles.userCard}>

              <div>
                <h4>User {req.sender_id}</h4>
                <p style={styles.skill}>Wants to connect</p>
              </div>

              <div style={styles.actions}>
                <button
                  style={styles.accept}
                  onClick={() => accept(req.id)}
                >
                  Accept
                </button>

                <button
                  style={styles.reject}
                  onClick={() => reject(req.id)}
                >
                  Reject
                </button>
              </div>

            </div>
          ))}

        </div>


        {/* Suggested Users */}
        <div style={styles.card}>
          <h2>Suggested Users</h2>

          {users.map((user) => (
            <div key={user.id} style={styles.userCard}>

              <div>
                <h4>{user.name}</h4>
                <p style={styles.skill}>{user.skill}</p>
              </div>

              <button
                style={styles.connect}
                onClick={() => connectUser(user.id)}
              >
                Connect
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}


const styles = {

  page: {
    padding: "40px",
    fontFamily: "Arial"
  },

  title: {
    marginBottom: "30px"
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px"
  },

  card: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },

  userCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    borderBottom: "1px solid #eee"
  },

  skill: {
    color: "#666",
    fontSize: "14px"
  },

  actions: {
    display: "flex",
    gap: "10px"
  },

  connect: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  accept: {
    background: "#16a34a",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  reject: {
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  empty: {
    color: "#777"
  }
};