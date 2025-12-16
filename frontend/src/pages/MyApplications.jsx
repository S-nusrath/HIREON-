// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const MyApplications = () => {
//   const { token } = useAuth();
//   const [apps, setApps] = useState([]);

// //   useEffect(() => {
// //     // axios
// //     //   .get("http://localhost:5000/api/applications/my", {
// //     //     headers: { Authorization: `Bearer ${token}` },
// //     //   })
// //     //   .then(res => setApps(res.data));
// //     axios.get("http://localhost:5000/api/applications/my", {
// //   headers: {
// //     Authorization: `Bearer ${localStorage.getItem("token")}`,
// //   },
// // });

// //   }, []);

// useEffect(() => {
//   const token = localStorage.getItem("token");
//   if (!token) return;

//   axios
//     .get("http://localhost:5000/api/applications/my", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       setApps(res.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }, []);



  
// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>My Applications</h2>
// //       {apps.map(app => (
// //         <div key={app.id}>
// //           <p>{app.Job.title} – {app.status}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

//  return (
//     <div style={{ padding: "20px" }}>
//       <h2>My Applications</h2>

//       {apps.length === 0 && <p>No applications found</p>}

//       {apps.map(app => (
//         <div key={app.id}>
//           <p>{app.Job?.title} – {app.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyApplications;



import { useEffect, useState } from "react";
import axios from "axios";

export default function MyApplications() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:5000/api/applications/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setApps(res.data); // ✅ THIS WAS MISSING
      })
      .catch((err) => {
        console.error("Failed to load applications", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: 20 }}>Loading applications...</p>;
  }

  if (apps.length === 0) {
    return <p style={{ padding: 20 }}>No applications found</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Applications</h2>

      {apps.map((app) => (
        <div
          key={app.id}
          style={{
            padding: "12px",
            marginBottom: "10px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
          }}
        >
          <h4>{app.Job?.title}</h4>
          <p>Status: {app.status}</p>
        </div>
      ))}
    </div>
  );
}
