import React, { useState, useMemo } from "react";
import JobCard from "../components/Jobcard";
import FiltersPanel from "../components/FiltersPanel";

/* mock data */
const MOCK = new Array(8).fill(0).map((_, i) => ({
  id: i + 1,
  title: `Frontend Developer ${i + 1}`,
  company: "Acme",
  location: i % 2 === 0 ? "Remote" : "Bengaluru",
  branch: "CS",
  year: "Any",
  skills: ["React", "JavaScript", "HTML"]
}));

export default function Jobs() {
  const [filters, setFilters] = useState({ branch: "All", year: "All", location: "" });

  const filtered = useMemo(() => {
    return MOCK.filter((job) => {
      if (filters.branch !== "All" && job.branch !== filters.branch) return false;
      if (filters.year !== "All" && job.year !== filters.year) return false;
      if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="container" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 }}>
      <FiltersPanel filters={filters} setFilters={setFilters} />
      <div style={{ display: "grid", gap: 12 }}>
        {filtered.map((j) => (
          <JobCard key={j.id} job={j} />
        ))}
      </div>
    </div>
  );
}
