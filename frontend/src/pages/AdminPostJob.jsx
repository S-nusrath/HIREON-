// import axios from "axios";
// import { useState } from "react";

// export default function AdminPostJob() {
//   const [title, setTitle] = useState("");

//   const submit = async () => {
//     const token = localStorage.getItem("token");

//     await axios.post(
//       "http://localhost:5000/api/jobs",
//       { title },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     alert("Job posted successfully");
//   };

//   return (
//     <div>
//       <h2>Admin – Post Job</h2>
//       <input
//         placeholder="Job title"
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button onClick={submit}>Post</button>
//     </div>
//   );
// }


import axios from "axios";
import { useState } from "react";

export default function AdminPostJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/jobs",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Job posted successfully");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Job post failed");
    }
  };

  return (
    <div>
      <h2>Admin – Post Job</h2>

      <input name="title" placeholder="Title" onChange={onChange} />
      <input name="company" placeholder="Company" onChange={onChange} />
      <input name="location" placeholder="Location" onChange={onChange} />
      <textarea
        name="description"
        placeholder="Description"
        onChange={onChange}
      />

      <button onClick={submit}>Post</button>
    </div>
  );
}
