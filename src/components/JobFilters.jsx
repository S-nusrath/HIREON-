export default function JobFilters({ filters, setFilters }) {
  return (
    <div className="filters">
      <select
        value={filters.type}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value })
        }
      >
        <option value="">All Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Internship">Internship</option>
      </select>

      <select
        value={filters.remote}
        onChange={(e) =>
          setFilters({ ...filters, remote: e.target.value })
        }
      >
        <option value="">All</option>
        <option value="true">Remote</option>
        <option value="false">Onsite</option>
      </select>
    </div>
  );
}
