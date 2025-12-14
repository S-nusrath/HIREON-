
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// // pages
// import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
// import Practice from "./pages/Practice";
// import ResumeBuilder from "./pages/ResumeBuilder";
// import SignIn from "./pages/Login";
// import SignUp from "./pages/Signup";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/jobs" element={<Jobs />} />
//         <Route path="/practice" element={<Practice />} />
//         <Route path="/resume" element={<ResumeBuilder />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

// socket
import socket from "./socket";

// pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Practice from "./pages/Practice";
import ResumeBuilder from "./pages/ResumeBuilder";
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";


function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("🟢 Socket connected:", socket.id);
    });

    socket.on("new-job", (job) => {
      console.log("📢 New job received:", job);
    });

    return () => {
      socket.off("new-job");
    };
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

