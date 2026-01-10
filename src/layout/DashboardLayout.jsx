// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import "./DashboardLayout.css";

// //import "./DashboardLayout.css";

// export default function DashboardLayout({ children }) {
//   return (
//     <div className="layout">
//       <Sidebar />

//       <div className="main">
//         <Navbar />
//         <div className="content">{children}</div>
//       </div>
//     </div>
//   );
// }
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./DashboardLayout.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
