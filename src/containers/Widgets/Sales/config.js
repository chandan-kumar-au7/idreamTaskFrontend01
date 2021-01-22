var data = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      label: "Daily_Active_User",
      backgroundColor: "rgb(255, 99, 132)",
      data: [78, 10, 34, 30, 20, 50, 70, 90],
      stack: 1,
    },
    {
      label: "Referral_Count",
      backgroundColor: "rgb(54, 162, 235)",
      data: [90, 65, 30, 30, 20, 50, 70, 90],
      stack: 1,
    },
    {
      label: "New_User_Count",
      backgroundColor: "rgb(153, 102, 255)",
      data: [20, 50, 70, 90, 23, 44, 65, 56],
      stack: 1,
    },
  ],
};

const settings = {
  cutoutPercentage: 70,
  legend: {
    position: "top",
    labels: {
      boxWidth: 12,
      fontFamily: "'Roboto', sans-serif",
      fontColor: "#424242",
      fontSize: 12,
      fontStyle: "bold",
      padding: 20,
    },
  },
};

export { data, settings };
