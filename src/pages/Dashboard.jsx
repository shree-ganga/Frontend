import { useState, useEffect } from "react";
import UserProfile from "../components/UserProfile";
import CareerRoadmap from "../components/CareerRoadmap";
import ProjectGenerator from "../components/ProjectGenerator";
import ProgressChart from "../components/ProgressChart";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const [level, setLevel] = useState(localStorage.getItem("level") || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (role) localStorage.setItem("role", role);
    if (level) localStorage.setItem("level", level);
  }, [role, level]);

  const resetProfile = () => {
    if (confirm("Reset your profile?")) {
      localStorage.removeItem("role");
      localStorage.removeItem("level");
      setRole("");
      setLevel("");
    }
  };

  return (
    <div className="container">
      <h1>📊 Dashboard</h1>

      <button className="btn danger" onClick={resetProfile}>
        🔄 Reset Profile
      </button>

      <UserProfile
        role={role}
        level={level}
        onChange={(r, l) => {
          setRole(r);
          setLevel(l);
        }}
      />
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
    <button className="btn danger" onClick={resetProfile}>
      🔄 Reset Profile
    </button>

    <button className="btn" onClick={() => navigate("/resume")}>
      📄 Go to Resume
    </button>
  </div>


      <CareerRoadmap role={role} />
      <ProjectGenerator level={level} />
      <ProgressChart level={level} />
    </div>
  );
}

export default Dashboard;
