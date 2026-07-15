import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsChart = ({ customers }) => {
  const data = {
    labels: ["Customers"],

    datasets: [
      {
        label: "Total Customers",
        data: [customers.length],
        backgroundColor: "#0d6efd",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="card shadow border-0 mb-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">
          Customer Statistics
        </h5>
      </div>

      <div className="card-body">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StatsChart;