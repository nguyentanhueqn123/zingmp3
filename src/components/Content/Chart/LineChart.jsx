import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const LineChart = () => {
  const data = {
    labels: [
      "06:00",
      ".",
      ".",
      ".",
      ".",
      ".",
      "09:00",
      ".",
      ".",
      ".",
      ".",
      ".",
      "12:00",
      ".",
      ".",
      ".",
      ".",
      ".",
      "15:00",
      ".",
      ".",
      ".",
      ".",
      ".",
      "18:00",
      ".",
      ".",
      ".",
      ".",
      ".",
      "21:00",
      ".",
      ".",
      ".",
      ".",
      ".",
      "24:00",
    ],
    datasets: [
      {
        data: [
          60, 55, 52, 50, 45, 40, 37, 33, 30, 33, 36, 37, 39, 40, 44, 47, 50,
          53, 55, 57, 60, 63, 59, 52, 45, 60, 60, 55, 52, 50, 40, 40, 37, 40,
          40, 37, 40, 40, 37,
        ],
        label: "Tron Vẹn Nghĩa Tình",
        borderColor: "rgb(74, 144, 226)",
        backgroundColor: "rgb(74, 144, 226)",
        fill: false,
      },
      {
        data: [
          45, 40, 37, 33, 30, 33, 36, 37, 39, 40, 44, 47, 50, 53, 55, 57, 60,
          63, 59, 55, 52, 50, 45, 40, 37, 33, 30, 40, 45, 33, 33, 33, 33, 33,
          33, 33, 33, 33,
        ],
        label: "Thương Em",
        borderColor: "rgb(39, 189, 156)",
        backgroundColor: "rgb(39, 189, 156)",
        fill: false,
      },
      {
        data: [
          37, 33, 30, 33, 36, 33, 30, 33, 36, 40, 40, 37, 33, 30, 40, 40, 40,
          40, 35, 35, 35, 35, 35, 30, 30, 30, 25, 27, 28, 29, 20, 20, 20, 20,
          20, 20,
        ],
        label: "Đám Cưới Nha",
        borderColor: "rgb(227, 80, 80)",
        backgroundColor: "rgb(227, 80, 80)",
        fill: false,
      },
    ],
  };
  const option = {
    title: {
      display: false,
      text: "Zing chart",
    },
    legend: {
      display: true,
      position: "bottom",
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };
  return <Line data={data} options={option} />;
};

export default LineChart;
