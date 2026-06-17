// export default function ResumePreview({ data }) {
//   return (
//     <div className="text-gray-800 text-sm">

//       {/* HEADER */}
//       <div className="border-b pb-3 mb-4">
//         <h1 className="text-2xl font-bold">{data.name || "Your Name"}</h1>
//         <p>{data.email} | {data.phone}</p>
//       </div>

//       {/* SUMMARY */}
//       {data.summary && (
//         <section className="mb-3">
//           <h2 className="font-semibold uppercase text-xs text-gray-500">Summary</h2>
//           <p>{data.summary}</p>
//         </section>
//       )}

//       {/* SKILLS */}
//       {data.skills && (
//         <section className="mb-3">
//           <h2 className="font-semibold uppercase text-xs text-gray-500">Skills</h2>
//           <p>{data.skills}</p>
//         </section>
//       )}

//       {/* EXPERIENCE */}
//       {data.experience && (
//         <section className="mb-3">
//           <h2 className="font-semibold uppercase text-xs text-gray-500">Experience</h2>
//           <p>{data.experience}</p>
//         </section>
//       )}

//       {/* PROJECTS */}
//       {data.projects && (
//         <section className="mb-3">
//           <h2 className="font-semibold uppercase text-xs text-gray-500">Projects</h2>
//           <p>{data.projects}</p>
//         </section>
//       )}

//       {/* EDUCATION */}
//       {data.education && (
//         <section>
//           <h2 className="font-semibold uppercase text-xs text-gray-500">Education</h2>
//           <p>{data.education}</p>
//         </section>
//       )}

//     </div>
//   );
// }
export default function ResumePreview({ data, template }) {

  if (template === "minimal") {
    return (
      <div className="text-gray-900 text-sm">
        <h1 className="text-xl font-bold">{data.name}</h1>
        <p>{data.email} | {data.phone}</p>

        <hr className="my-2" />

        <p>{data.summary}</p>
        <p><b>Skills:</b> {data.skills}</p>
        <p><b>Experience:</b> {data.experience}</p>
        <p><b>Projects:</b> {data.projects}</p>
        <p><b>Education:</b> {data.education}</p>
      </div>
    );
  }

  // 🔥 MODERN (DEFAULT)
  return (
    <div className="text-gray-800 text-sm">

      <div className="border-b pb-3 mb-4">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p>{data.email} | {data.phone}</p>
      </div>

      <Section title="Summary" content={data.summary} />
      <Section title="Skills" content={data.skills} />
      <Section title="Experience" content={data.experience} />
      <Section title="Projects" content={data.projects} />
      <Section title="Education" content={data.education} />

    </div>
  );
}

function Section({ title, content }) {
  if (!content) return null;

  return (
    <div className="mb-3">
      <h2 className="uppercase text-xs font-semibold text-gray-500">
        {title}
      </h2>
      <p>{content}</p>
    </div>
  );
}

