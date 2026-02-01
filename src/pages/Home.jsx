import { useNavigate } from "react-router-dom";
import { FaRocket, FaChartLine, FaFileAlt } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>🚀 Smart Career Companion</h1>
        <p>
          Plan your career, track your skills, build projects,
          and generate a professional resume — all in one place.
        </p>

        <button className="btn primary" onClick={() => navigate("/dashboard")}>
          Get Started →
        </button>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <FaChartLine size={40} />
          <h3>Career Roadmap</h3>
          <p>Personalized learning paths based on your role.</p>
        </div>

        <div className="feature-card">
          <FaRocket size={40} />
          <h3>Project Generator</h3>
          <p>Get project ideas based on your skill level.</p>
        </div>

        <div className="feature-card">
          <FaFileAlt size={40} />
          <h3>Smart Resume</h3>
          <p>Auto-generate a resume & download as PDF.</p>
        </div>
      </section>

      {/* SECOND CTA */}
      <section className="cta">
        <h2>Start Building Your Career Today</h2>
        <button className="btn" onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </button>
      </section>
    </div>
  );
}

export default Home;
