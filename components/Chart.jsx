import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = ({ dates, prices }) => {
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Price',
        data: prices,
        borderColor: '#000435',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Dates',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Prices',
        },
      },
    },
  };

  return <Line data={data} options={options}  />;
};

export default Chart;
