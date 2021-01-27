import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import WidgetBox from "../WidgetBox";
import { Bar } from "react-chartjs-2";
import { findDau } from "../../../utils/findDau";

const Statistics = (props) => {
  const history = useHistory();

  const [Day, setDay] = useState(null);
  const [zeroToTwentyfive, setzeroToTwentyfive] = useState(null);
  const [twentyfiveToFifty, settwentyfiveToFifty] = useState(null);
  const [fiftyToSeventyfive, setfiftyToSeventyfive] = useState(null);
  const [seventyfiveToOnehundred, setseventyfiveToOnehundred] = useState(null);

  let PERDAYBYDATE = [];
  let DAU = [];
  let RU = [];
  let NUC = [];

  var data = {
    labels: ["0-25%", "25-50%", "50-75%", "75-100%"],
    datasets: [
      {
        label: "Daily_Active_User",
        backgroundColor: "rgb(255, 99, 132)",
        data: [78, 10, 34, 30, 20, 50, 70, 90],
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

  const { title, description, stretched } = props;
  const { Clicked, From, To } = props;

  useEffect(() => {
    try {
      findDau(From, To).then((dauData) => {
        // console.log("DAU ==>> ", dauData);

        for (const dataObj of dauData.data) {
          PERDAYBYDATE.push(parseInt(dataObj.day));
          DAU.push(parseInt(dataObj.engagement_count));
          RU.push(parseInt(dataObj.referral_count));
          NUC.push(parseInt(dataObj.new_user_count));
        }

        setDay(PERDAYBYDATE);
        setzeroToTwentyfive(DAU);
        settwentyfiveToFifty(RU);
        setfiftyToSeventyfive(NUC);
        setseventyfiveToOnehundred(NUC);
      });
    } catch (error) {
      console.log("err ----- ", error.message);
      // history.push("/");
    }

    // console.log(PERDAYBYDATE, DAU, RU, NUC);
  }, [history, Clicked]);

  return (
    <WidgetBox title={title} description={description} stretched={stretched}>
      <Bar data={data} options={settings} />
    </WidgetBox>
  );
};

export default Statistics;
