/*import { useEffect, useState } from "react";

const ConnectionRequests = () => {
  const [requests, setRequests] = useState([]);
  const token = localStorage.getItem("token");

  const fetchRequests = async () => {
    const res = await fetch(
      "http://localhost:5000/api/connections/requests",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    setRequests(data);
  };

  const acceptRequest = async (id) => {
    await fetch(
      `http://localhost:5000/api/connections/accept/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchRequests();
  };

  const rejectRequest = async (id) => {
    await fetch(
      `http://localhost:5000/api/connections/reject/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchRequests();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Connection Requests</h2>

      {requests.length === 0 && <p>No new requests</p>}

      {requests.map((req) => (
        <div
          key={req.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p><b>{req.sender.name}</b></p>
          <p>{req.sender.email}</p>

          <button onClick={() => acceptRequest(req.id)}>
            Accept
          </button>

          <button
            onClick={() => rejectRequest(req.id)}
            style={{ marginLeft: "10px" }}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default ConnectionRequests;
*/
import { useEffect, useState } from "react";
import "./ConnectionRequests.css";

export default function ConnectionRequests() {
  const [requests, setRequests] = useState([]);
  const token = localStorage.getItem("token");

  const fetchRequests = async () => {
    const res = await fetch(
      "http://localhost:5000/api/connections/requests",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    setRequests(data);
  };

  const acceptRequest = async (id) => {
    await fetch(
      `http://localhost:5000/api/connections/accept/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchRequests();
  };

  const rejectRequest = async (id) => {
    await fetch(
      `http://localhost:5000/api/connections/reject/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchRequests();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="requests-page">
      <h1 className="page-title">Connection Requests</h1>

      {requests.length === 0 ? (
        <p className="empty-text">No new requests</p>
      ) : (
        <div className="requests-grid">
          {requests.map((req) => (
            <div className="request-card" key={req.id}>
              <div className="avatar">
                {req.sender.name.charAt(0)}
              </div>

              <h3>{req.sender.name}</h3>
              <p>{req.sender.email}</p>

              <div className="action-row">
                <button
                  className="accept-btn"
                  onClick={() => acceptRequest(req.id)}
                >
                  Accept
                </button>

                <button
                  className="reject-btn"
                  onClick={() => rejectRequest(req.id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
