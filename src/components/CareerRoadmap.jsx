function CareerRoadmap({ role }) {
  const roadmaps = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Projects"],
    "Full Stack": ["HTML", "CSS", "JS", "React", "Node", "MongoDB"],
    Java: ["Java Basics", "OOP", "JDBC", "Spring Boot"],
    "UI/UX": ["Design Basics", "Figma", "User Research", "Prototyping"]
  };

  if (!role) return null;

  return (
    <div className="card">
      <h3>📍 {role} Roadmap</h3>
      <ul>
        {roadmaps[role].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CareerRoadmap;
