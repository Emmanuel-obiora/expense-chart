import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title,  Tooltip, Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Data from '../data.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Expense Chart',
      },
      tooltip: {
        // enabled: false,
        callbacks:
        {
          title: (context) =>
          {
            // console.log(`$${context[0].parsed.y}`);
            return (`$${context[0].parsed.y}`);
          },
          label: (context) => {
            // console.log(context.label);
            return ''
          },
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display:false
        }
      }
    },
  };
  
  const labels = Data.map((days) => days.day);
  
  const data = {
      labels,
      datasets: [
        {
          label: '',
          data: Data.map((info) => info.amount),
          backgroundColor: [
                  "#ec775f",
                  "#ec775f",
                  "#76b5bc",
                  "#ec775f",
                  "#ec775f",
                  "#ec775f",
                  "#ec775f"
                ],
          borderRadius: 3,
        }
      ],
    };

  return (
    <div className='chart'>
      <div className="chart-top">
        <h1>Spending - Last 7 days</h1>
      </div>
      <Bar data={data} options={options} />
      <div className="chart-but">
        <article className="chart-but_left">
          <p>Total this month</p>
          <h2>$478.33</h2>
        </article>
        <article className="chart-but_right">
          <h3>+2.4%</h3>
          <p>from last month</p>
        </article>
      </div>
    </div>
  )
}

export default Chart