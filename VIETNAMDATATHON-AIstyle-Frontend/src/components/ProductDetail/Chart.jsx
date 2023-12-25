import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartData = ({ ProductId }) => {
  const [chartData, setChartData] = useState([]);
  console.log({chartData})
  useEffect(() => {
    const fetchData = async () => {
      console.log("get chart data");
      try {
        const response = await fetch(`http://127.0.0.1:5000/chart/${ProductId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assuming 'data.Price' is an array of numerical values representing prices
        setChartData(data.Price);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    if (ProductId) {
      fetchData();
    }
  }, [ProductId]);

  const chartOptions = {
    chart: {
      height: 250,
    },
    title: {
      text: 'Price Chart',
    },
    xAxis: {
      type: 'Days',
      accessibility: {
        rangeDescription: 'Range: 1 to 10',
      },
    },
    yAxis: {
      title: {
        text: 'Price',
      },
      minorTickInterval: 0.1,
      accessibility: {
        rangeDescription: 'Range: 0.1 to 1000',
      },
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br />',
      pointFormat: 'x = {point.x}, y = {point.y}',
    },
    series: [{
      name: 'Price',
      data: chartData.map((price, index) => [index + 1, price]), // Index + 1 to start from day 1
    }],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default ChartData;
