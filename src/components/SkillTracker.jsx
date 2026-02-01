import { useState } from "react";

function SkillTracker() {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill) return;
    setSkills([...skills, skill]);
    setSkill("");
  };

  return (
    <div className="card">
      <h3>📊 Skill Tracker</h3>

      <input
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter skill"
      />
      <button onClick={addSkill}>Add</button>

      <ul>
        {skills.map((s, i) => (
          <li key={i}>⭐ {s}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillTracker;
