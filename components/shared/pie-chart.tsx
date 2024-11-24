"use client"

import { Pie } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
    Colors
} from "chart.js/auto";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Colors);

interface PieChartProps {
    data: any
}

const PieChart = ({data}: PieChartProps) => {


  return (
    <>
      <Pie data={data} options={{        
        responsive: true,
        plugins: {
          colors: {
              forceOverride: true
          }
        },        

      }} />
    </>
  );
};

export default PieChart
