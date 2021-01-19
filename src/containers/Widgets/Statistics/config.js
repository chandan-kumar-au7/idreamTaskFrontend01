/* * * * * * * * * * * * * * * * * * * *
              Charts Config
* * * * * * * * * * * * * * * * * * * */

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Visitor",
      type: "line",
      data: [51, 63, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: "rgb(153, 102, 255, 0.5)",
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      pointBorderColor: "rgba(153, 102, 255, 1)",
      pointBackgroundColor: "rgba(153, 102, 255, 1)",
      pointHoverBackgroundColor: "rgba(153, 102, 255, 1)",
      pointHoverBorderColor: "rgba(153, 102, 255, 1)",
      yAxisID: "y-axis-2"
    },
    {
      type: "bar",
      label: "Sales",
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      borderColor: "rgba(255, 99, 132, 0.7)",
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(201, 203, 207, 0.5)"
      ],
      hoverBackgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(201, 203, 207, 0.6)"
      ],
      hoverBorderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)"
      ],
      yAxisID: "y-axis-1"
    }
  ]
};

const options = {
  responsive: true,
  tooltips: {
    mode: "label"
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
        gridLines: {
          display: false
        }
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          display: false
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
