export default function ResumeForm({ data, setData }) {

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full border p-2 rounded mb-3 focus:ring-2 focus:ring-indigo-500 outline-none";

  return (
    <div>

      <h2 className="text-xl font-semibold mb-4">Edit Resume</h2>

      <input
        name="name"
        placeholder="Full Name"
        className={inputClass}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        className={inputClass}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        className={inputClass}
        onChange={handleChange}
      />

      <textarea
        name="summary"
        placeholder="Professional Summary"
        className={inputClass}
        onChange={handleChange}
      />

      <textarea
        name="skills"
        placeholder="Skills (comma separated)"
        className={inputClass}
        onChange={handleChange}
      />

      <textarea
        name="experience"
        placeholder="Experience"
        className={inputClass}
        onChange={handleChange}
      />

      <textarea
        name="projects"
        placeholder="Projects"
        className={inputClass}
        onChange={handleChange}
      />

      <textarea
        name="education"
        placeholder="Education"
        className={inputClass}
        onChange={handleChange}
      />

    </div>
  );
}