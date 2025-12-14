// import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Practice from "./pages/Practice";
// import Profile from "./pages/Profile";
// import JobDetail from "./pages/JobDetail";
// import socket from "./socket"; // ✅ ADD THIS

// export default function App() {

//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("✅ Connected to socket:", socket.id);
//     });

//     socket.on("disconnect", () => {
//       console.log("❌ Socket disconnected");
//     });

//     return () => {
//       socket.off("connect");
//       socket.off("disconnect");
//     };
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div style={{ paddingTop: "20px" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/jobs" element={<Jobs />} />
//           <Route path="/jobs/:id" element={<JobDetail />} />
//           <Route path="/practice" element={<Practice />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }


import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Practice from "./pages/Practice";
import Profile from "./pages/Profile";
import JobDetail from "./pages/JobDetail";
import socket from "./socket";

export default function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected");
    });

    socket.on("new-job", (job) => {
      console.log("🔔 New Job Posted:", job.title);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("new-job");
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}
