function ProjectGenerator({ level }) {
  const projects = {
    Beginner: [
      "Portfolio Website",
      "Todo App",
      "Calculator"
    ],
    Intermediate: [
      "Job Portal UI",
      "Resume Builder",
      "Career Recommendation App"
    ]
  };

  if (!level) return null;

  return (
    <div className="card">
      <h3>🚀 Projects for {level}</h3>
      <ul>
        {projects[level].map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectGenerator;
