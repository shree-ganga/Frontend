import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Resume() {
  const resumeRef = useRef(null);

  const role = localStorage.getItem("role");
  const level = localStorage.getItem("level");

  const downloadPDF = async () => {
    const canvas = await html2canvas(resumeRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("resume.pdf");
  };

  return (
    <div className="container">
      <button onClick={downloadPDF} className="btn">
        📄 Download Resume
      </button>

      <div className="resume" ref={resumeRef}>
        <h1>Your Name</h1>
        <h3>{role} Developer</h3>
        <p><strong>Level:</strong> {level}</p>

        <h4>Skills</h4>
        <ul>
          {role === "Frontend" && (
            <>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </>
          )}
        </ul>

        <h4>Summary</h4>
        <p>
          Passionate {role} developer with strong fundamentals and
          hands-on project experience.
        </p>
      </div>
    </div>
  );
}

export default Resume;
