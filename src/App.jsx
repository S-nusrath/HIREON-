// // import { Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";

// // // pages
// // import Home from "./pages/Home";
// // import Jobs from "./pages/Jobs";
// // import JobDetail from "./pages/JobDetail";
// // import Practice from "./pages/Practice";
// // import Profile from "./pages/Profile";
// // import ResumeBuilder from "./pages/ResumeBuilder";
// // import SignIn from "./pages/Login";
// // import SignUp from "./pages/Signup";
// // import DiscoverUsers from "./pages/DiscoverUsers";
// // import ConnectionRequests from "./pages/ConnectionRequests";
// // import MyConnections from "./pages/MyConnections";

// // function App() {
// //   return (
// //     <>
// //       <Navbar />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/jobs" element={<Jobs />} />
// //         <Route path="/jobs/:id" element={<JobDetail />} />
// //         <Route path="/practice" element={<Practice />} />
// //         <Route path="/profile" element={<Profile />} />
// //         <Route path="/resume" element={<ResumeBuilder />} />
// //         <Route path="/signin" element={<SignIn />} />
// //         <Route path="/signup" element={<SignUp />} />
// //         <Route path="/discover" element={<DiscoverUsers />} />
// //         <Route path="/requests" element={<ConnectionRequests />} />
// //         <Route path="/connections" element={<MyConnections />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;
// import { Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// import Jobs from "./pages/Jobs";
// import DiscoverUsers from "./pages/DiscoverUsers";
// import ConnectionRequests from "./pages/ConnectionRequests";
// import MyConnections from "./pages/MyConnections";
// import SignIn from "./pages/Login";
// import SignUp from "./pages/Signup";

// function App() {
//   return (
//     <Routes>
//       {/* AUTH PAGES (no sidebar) */}
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />

//       {/* DASHBOARD PAGES (with sidebar + navbar) */}
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/jobs" element={<Jobs />} />
//       <Route path="/discover" element={<DiscoverUsers />} />
//       <Route path="/requests" element={<ConnectionRequests />} />
//       <Route path="/connections" element={<MyConnections />} />
//     </Routes>
//   );
// }

// export default App;
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// // pages
// import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
// import JobDetail from "./pages/JobDetail";
// import Practice from "./pages/Practice";
// import Profile from "./pages/Profile";
// import ResumeBuilder from "./pages/ResumeBuilder";
// import SignIn from "./pages/Login";
// import SignUp from "./pages/Signup";
// import DiscoverUsers from "./pages/DiscoverUsers";
// import ConnectionRequests from "./pages/ConnectionRequests";
// import MyConnections from "./pages/MyConnections";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/jobs" element={<Jobs />} />
//         <Route path="/jobs/:id" element={<JobDetail />} />
//         <Route path="/practice" element={<Practice />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/resume" element={<ResumeBuilder />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/discover" element={<DiscoverUsers />} />
//         <Route path="/requests" element={<ConnectionRequests />} />
//         <Route path="/connections" element={<MyConnections />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import DiscoverUsers from "./pages/DiscoverUsers";
import ConnectionRequests from "./pages/ConnectionRequests";
import MyConnections from "./pages/MyConnections";
import ResumeBuilder from "./pages/ResumeBuilder";
import Practice from "./pages/Practice";
import Profile from "./pages/Profile";
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";

function App() {
  return (
    <Routes>
      {/* AUTH */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* DASHBOARD */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/discover" element={<DiscoverUsers />} />
      <Route path="/requests" element={<ConnectionRequests />} />
      <Route path="/connections" element={<MyConnections />} />
      <Route path="/resume" element={<ResumeBuilder />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;