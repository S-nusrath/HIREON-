import React from "react";

export default function FiltersPanel({ filters, setFilters }) {
  const update = (key) => (e) => setFilters({ ...filters, [key]: e.target.value });

  return (
    <aside style={{ position: "sticky", top: 20 }}>
      <div className="card">
        <h4 style={{ margin: 0 }}>Filters</h4>

        <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
          <div>
            <label className="small">Branch</label>
            <select value={filters.branch} onChange={update("branch")} style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 8 }}>
              <option value="All">All</option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
            </select>
          </div>

          <div>
            <label className="small">Year</label>
            <select value={filters.year} onChange={update("year")} style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 8 }}>
              <option value="All">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div>
            <label className="small">Location</label>
            <input value={filters.location} onChange={update("location")} placeholder="e.g. Remote, Bangalore" style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 8 }} />
          </div>
        </div>
      </div>
    </aside>
  );
}
