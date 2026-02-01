import { useState } from "react";

function ResumeBuilder() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="card">
      <h3>📄 Resume Builder</h3>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Role" onChange={(e) => setRole(e.target.value)} />

      <hr style={{ margin: "10px 0" }} />

      <p><b>{name}</b></p>
      <p>{role}</p>
    </div>
  );
}

export default ResumeBuilder;
