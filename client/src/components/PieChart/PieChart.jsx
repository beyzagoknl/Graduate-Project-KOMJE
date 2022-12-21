import React from "react";
import PropTypes from "prop-types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, numberOfAttending, data, text }) => {
  const seedData = {
    labels,
    datasets: [
      {
        label: `${numberOfAttending}  Answers`,
        data: data,
        backgroundColor: ["#277da1", "#f3722c", "#f94144", "#43aa8b"],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: numberOfAttending,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: text,
      },
    },
  };
  return (
    <div>
      <Pie height={400} width={600} data={seedData} options={options} />
    </div>
  );
};
PieChart.propTypes = {
  labels: PropTypes.array,
  numberOfAttending: PropTypes.number,
  data: PropTypes.array,
  text: PropTypes.string,
};
export default PieChart;
