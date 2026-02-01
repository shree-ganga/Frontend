import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ProgressChart({ level }) {
  if (!level) return null;

  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: level === "Beginner" ? [40, 60] : [70, 30],
        backgroundColor: ["#4CAF50", "#E0E0E0"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="card progress-card">
      <h3>📈 Learning Progress</h3>

      <div className="chart-wrapper">
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default ProgressChart;
