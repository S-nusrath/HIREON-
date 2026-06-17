import JobCard from "../jobs/JobCard";

export default function JobsPage() {

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full Time",
    },

    {
      id: 2,
      title: "Backend Engineer",
      company: "Microsoft",
      location: "Hyderabad",
      type: "Remote",
    },

    {
      id: 3,
      title: "Full Stack Intern",
      company: "Amazon",
      location: "Chennai",
      type: "Internship",
    },

    {
      id: 4,
      title: "React Developer",
      company: "Meta",
      location: "Pune",
      type: "Hybrid",
    },
  ];

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Available Jobs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}

      </div>

    </div>
  );
}