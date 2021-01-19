const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Monthly Sales",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(54, 162, 235, 0.7)",
      hoverBorderColor: "rgb(54, 162, 235)",
      data: [65, 59, 80, 81, 56, 78]
    }
  ]
};

const barSettings = {
  height: 350
};

export { data, barSettings };
