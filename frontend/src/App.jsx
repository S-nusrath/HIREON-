import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AdminPostJob from "./pages/AdminPostJob";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";


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
import MyApplications from "./pages/MyApplications";
import JobDetail from "./pages/JobDetail";
import AdminMyJobs from "./pages/AdminMyJobs";

function App() {
  const { user, loading } = useAuth();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("🟢 Socket connected:", socket.id);
    });

    socket.on("new-job", (job) => {
      console.log("📢 New job received:", job);
    });
//const { user, loading } = useAuth();

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
        <Route path="/applications" element={<MyApplications />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route
  path="/admin/jobs"
  element={
    !loading && user?.role === "admin"
      ? <AdminPostJob />
      : <Navigate to="/" />
  }
/>
<Route
  path="/admin/my-jobs"
  element={
    !loading && user?.role === "admin"
      ? <AdminMyJobs/>
      : <Navigate to="/" />
  }
/>


      </Routes>
    </>
  );
}

export default App;

