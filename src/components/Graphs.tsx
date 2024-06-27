import React from "react";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

//These are real data taken from Google. 
//These are headcoded for the time but hopefully there's some API to automate this

const Graphs: React.FC = () => {
  const chartData = {
    labels: [
      "2013-14",
      "2014-15",
      "2015-16",
      "2016-17",
      "2017-18",
      "2018-19",
      "2019-20",
      "2020-21",
      "2021-22",
      "2022-23",
    ],
    datasets: [
      {
        label: "Green Energy Production (in GW)",
        data: [
          61.78,
          68.79,
          76.87,
          88.14,
          101.84,
          118.87,
          136.34,
          151.39,
          164.43,
          175,
        ],
        fill: false,
        borderColor: "rgb(75,217,129)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Year'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Green Energy Production (GW)'
        }
      }
    }
  };

  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Green Energy Production Trends in India for the last 10 years
      </h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Graphs;
