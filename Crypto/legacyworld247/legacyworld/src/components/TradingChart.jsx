import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Price",
      data: [100, 120, 150, 130, 170],
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 2,
    },
  ],
};

const TradingChart = () => {
  return (
    <div className="chart-container">
      <h2>Market Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default TradingChart;
