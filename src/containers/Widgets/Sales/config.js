const data = {
  labels: ["Product X", "Product Y", "Product Z"],
  datasets: [
    {
      data: [300, 100, 50],
      borderWidth: 1,
      borderColor: ["#ffffff", "#ffffff", "#ffffff"],
      backgroundColor: [
        "rgb(153, 102, 255)",
        "rgb(54, 162, 235)",
        "rgb(255, 99, 132)"
      ],
      hoverBackgroundColor: [
        "rgb(153, 102, 255)",
        "rgb(54, 162, 235)",
        "rgb(255, 99, 132)"
      ],
      hoverBorderColor: ["#ffffff", "#ffffff", "#ffffff"]
    }
  ]
};

const settings = {
  cutoutPercentage: 70,
  legend: {
    position: "bottom",
    labels: {
      boxWidth: 15,
      fontFamily: "'Roboto', sans-serif",
      fontColor: "#424242",
      fontSize: 13,
      fontStyle: "bold",
      padding: 20
    }
  }
};

export { data, settings };
