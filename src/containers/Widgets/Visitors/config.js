/* * * * * * * * * * * * * * * * * * * *
              Charts Config
* * * * * * * * * * * * * * * * * * * */
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Regular",
      data: [350, 456, 404, 590, 705, 970],
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      yAxisID: "y-axis-1"
    },
    {
      label: "New",
      data: [200, 185, 590, 921, 250, 800],
      borderColor: "rgb(153, 102, 255)",
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      yAxisID: "y-axis-2"
    }
  ]
};

const options = {
  responsive: true,
  type: "bar",
  legend: {
    display: false
  },
  tooltips: {
    mode: "label"
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    yAxes: [
      {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "left",
        id: "y-axis-1"
      },
      {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          drawOnChartArea: false
        }
      }
    ]
  }
};

const plugins = [
  {
    afterDraw: (chartInstance, easing) => {
      const ctx = chartInstance.chart.ctx;
      ctx.fillText("", 100, 100);
    }
  }
];
export { data, options, plugins };
