import { Link } from "react-router-dom";
import { FaHome, FaChartLine, FaFilePdf } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚀 Smart Career Companion</h2>
      <div className="nav-links">
        <Link to="/"><FaHome /> Home</Link>
        <Link to="/dashboard"><FaChartLine /> Dashboard</Link>
        <Link to="/resume"><FaFilePdf /> Resume</Link>
      </div>
    </nav>
  );
}

export default Navbar;
