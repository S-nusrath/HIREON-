// <<<<<<< HEAD
// // import React, { useEffect } from "react";
// // import { Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import Jobs from "./pages/Jobs";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import Practice from "./pages/Practice";
// // import Profile from "./pages/Profile";
// // import JobDetail from "./pages/JobDetail";
// // import socket from "./socket"; // ✅ ADD THIS

// // export default function App() {

// //   useEffect(() => {
// //     socket.on("connect", () => {
// //       console.log("✅ Connected to socket:", socket.id);
// //     });

// //     socket.on("disconnect", () => {
// //       console.log("❌ Socket disconnected");
// //     });

// //     return () => {
// //       socket.off("connect");
// //       socket.off("disconnect");
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <Navbar />
// //       <div style={{ paddingTop: "20px" }}>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/jobs" element={<Jobs />} />
// //           <Route path="/jobs/:id" element={<JobDetail />} />
// //           <Route path="/practice" element={<Practice />} />
// //           <Route path="/profile" element={<Profile />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<Signup />} />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect } from "react";
// =======
// >>>>>>> fedb49bfab430f0e2beb9a258bf02e69cff07fba
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Practice from "./pages/Practice";
// import Profile from "./pages/Profile";
// <<<<<<< HEAD
// import JobDetail from "./pages/JobDetail";
// import socket from "./socket";
// =======
// >>>>>>> fedb49bfab430f0e2beb9a258bf02e69cff07fba

// export default function App() {
//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("✅ Connected to socket:", socket.id);
//     });

//     socket.on("disconnect", () => {
//       console.log("❌ Socket disconnected");
//     });

//     socket.on("new-job", (job) => {
//       console.log("🔔 New Job Posted:", job.title);
//     });

//     return () => {
//       socket.off("connect");
//       socket.off("disconnect");
//       socket.off("new-job");
//     };
//   }, []);

//   return (
//     <>
//       <Navbar />   {/* 🔥 THIS WAS MISSING */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/jobs" element={<Jobs />} />
//         <Route path="/signin" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/practice" element={<Practice />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </>
//   );
// }



/*import { useEffect } from "react";
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
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
*/
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Practice from "./pages/Practice";
import Profile from "./pages/Profile";
import ResumeBuilder from "./pages/ResumeBuilder";
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";
import DiscoverUsers from "./pages/DiscoverUsers";
import ConnectionRequests from "./pages/ConnectionRequests";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/discover" element={<DiscoverUsers />} />
        <Route path="/requests" element={<ConnectionRequests />} />
      </Routes>
    </>
  );
}

export default App;
