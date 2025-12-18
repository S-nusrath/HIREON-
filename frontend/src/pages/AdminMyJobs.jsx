import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminMyJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/jobs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setJobs(res.data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>My Posted Jobs</h2>

      {jobs.length === 0 && <p>No jobs posted yet</p>}

      {jobs.map((job) => (
        <div key={job.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}
