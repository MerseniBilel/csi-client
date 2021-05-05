import React from 'react'
import { Doughnut } from 'react-chartjs-2';


const data = {
  
  labels: [
    'Adam',
    'John',
    'Patric'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#9a649e',
    '#7fdeb0',
    '#75bfbf'
    ],
    hoverBackgroundColor: [
    '#9a649e',
    '#7fdeb0',
    '#75bfbf'
    ]
  }]
};


const Chart = () => {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  )
}

export default Chart
