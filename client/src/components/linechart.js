import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title,CategoryScale);

function LineChart({time,prices}) {
    //console.log(time)
    prices.push(0)
    
  return (
    <div className="chart-container">
      <Line
        data={{
            labels: time,
            datasets: [
              {
                id: 1,
                label: '',
                data: prices,
                borderColor: 'blue',
                borderWidth: 2,
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
              }
            ],
          }}
        options={{
          elements: {
            point:{
                radius: 0
            }
        },
          plugins: {
            title: {
              display: true,
              text: "Price",
              font: {
                size: 20,
                style: 'italic',
              },
            },
            legend: {
              display: false
            }},
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  font: {
                    size: 12,
                  },
                },
              },
              y: {
                grid: {
                  display: false,
                  drawBorder:false,
                },
                border:{
                  display:false,
                }
               
              }}
          
        }}
      />
    </div>
  );
}
export default LineChart;