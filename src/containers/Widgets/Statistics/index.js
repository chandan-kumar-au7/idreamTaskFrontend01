import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import WidgetBox from "../WidgetBox";
import { Bar } from "react-chartjs-2";
import { findDau } from "../../../utils/findDau";

const Statistics = (props) => {
  const history = useHistory();

  // const [Day, setDay] = useState(null);
  const [zeroToTwentyfive, setzeroToTwentyfive] = useState(0);
  const [twentyfiveToFifty, settwentyfiveToFifty] = useState(0);
  const [fiftyToSeventyfive, setfiftyToSeventyfive] = useState(0);
  const [seventyfiveToOnehundred, setseventyfiveToOnehundred] = useState(0);

  const { title, description, stretched } = props;
  const { Clicked, From, To } = props;
  // let PERDAYBYDATE = [];

  let zero = useRef(0);
  let twentyfive = useRef(0);
  let seventyfive = useRef(0);
  let hundred = useRef(0);

  useEffect(() => {
    // console.log("Day ==>> ", Day);

    try {
      findDau(From, To).then((dauData) => {
        // console.log("DAU in statistics ==>> ", dauData);

        for (const dataObj of dauData.data) {
          // console.log("DAU in statistics ==>> ", dataObj);

          // PERDAYBYDATE.push(parseInt(dataObj.day));

          zero.current += parseInt(dataObj.ZeroToTwentyFive);
          // console.log("zero ", parseInt(dataObj.ZeroToTwentyFive));

          twentyfive.current += parseInt(dataObj.TwentyFiveToFifty);
          // console.log("twentyfive ", dataObj.TwentyFiveToFifty);

          seventyfive.current += parseInt(dataObj.FiftyToSeventyFive);
          // console.log("seventyfive ", dataObj.FiftyToSeventyFive);

          hundred.current += parseInt(dataObj.SeventyFiveToNintyNine);
          // console.log("hundred ", parseInt(dataObj.SeventyFiveToNintyNine));
        }

        // setDay(PERDAYBYDATE);

        setzeroToTwentyfive(zero.current);
        settwentyfiveToFifty(twentyfive.current);
        setfiftyToSeventyfive(seventyfive.current);
        setseventyfiveToOnehundred(hundred.current);

        // setTimeout(() => {
        //   console.log("2nd ===>>. ", Day);
        // }, 1000);
      });
    } catch (error) {
      console.log("err ----- ", error.message);
      history.push("/");
    }

    // console.log(PERDAYBYDATE, DAU, RU, NUC);
  }, [history, Clicked, From, To]);

  var data = {
    labels: ["0-25%", "25-50%", "50-75%", "75-100%"],
    datasets: [
      {
        label: "Daily_Active_User",
        backgroundColor: [
          "#F00",
          "#F80",
          "#FF0",
          "#0B0",
          "#00F",
          "#50F",
          "#A0F",
        ],
        data: [
          zeroToTwentyfive,
          twentyfiveToFifty,
          fiftyToSeventyfive,
          seventyfiveToOnehundred,
        ],
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

  return (
    <WidgetBox title={title} description={description} stretched={stretched}>
      <Bar data={data} options={settings} />
    </WidgetBox>
  );
};

export default Statistics;
