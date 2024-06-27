// components/ChartPie.tsx

import React from 'react';
import { Pie } from 'react-chartjs-2';

const Chart: React.FC = () => {
  // Data based on provided information
  const data = {
    labels: [
      'Wind Power',
      'Solar Power',
      'Biomass/Co-generation',
      'Small Hydro Power',
      'Waste To Energy',
      'Large Hydro',
    ],
    datasets: [
      {
        data: [46.42, 84.27, 10.35, 5, 0.59, 46.92], // GW values for each method
        backgroundColor: [
          '#FF6384', // Wind Power
          '#36A2EB', // Solar Power
          '#FFCE56', // Biomass/Co-generation
          '#8EFF7A', // Small Hydro Power
          '#FF9F40', // Waste To Energy
          '#663399', // Large Hydro (same as Wind Power for demonstration)
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8EFF7A',
          '#FF9F40',
          '#663399',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className=" max-w-md bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-bold mb-4">Renewable Energy Sources in India (as of May 2024)</h2>
      <div className="flex text-xs text-gray-400">
        <p>
          All the data is in GW*
        </p>
      </div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Chart    ;

