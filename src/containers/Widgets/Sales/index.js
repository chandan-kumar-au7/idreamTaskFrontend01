import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { settings } from "./config";
import WidgetBox from "../WidgetBox";
import axios from "axios";

import { notification } from "../../../components";

const SalesStats = (props) => {
  const history = useHistory();

  const [Day, setDay] = useState(null);
  const [Daily_Active_User, setDaily_Active_User] = useState(null);
  const [Referral_Count, setReferral_Count] = useState(null);
  const [New_User_Count, setNew_User_Count] = useState(null);

  let PERDAYBYDATE = [];
  let DAU = [];
  let RU = [];
  let NUC = [];
  let dayToShow = [];

  const { Clicked, From, To } = props;

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://${document.location.hostname}:4000/dau/getdau`,
      }).then((dauData) => {
        console.log(dauData);

        for (const dataObj of dauData.data) {
          PERDAYBYDATE.push(parseInt(dataObj.day));
          DAU.push(parseInt(dataObj.engagement_count));
          RU.push(parseInt(dataObj.referral_count));
          NUC.push(parseInt(dataObj.new_user_count));
        }
        if (Clicked === true) {
          for (var day = From; day < To; day++) {
            dayToShow.push(PERDAYBYDATE[PERDAYBYDATE.length - day]);
          }
        }
        if (Clicked !== true) {
          for (var day = 1; day < 9; day++) {
            dayToShow.push(PERDAYBYDATE[PERDAYBYDATE.length - day]);
          }
        }
        setDay(dayToShow);
        setDaily_Active_User(DAU);
        setReferral_Count(RU);
        setNew_User_Count(NUC);
      });

      notification("success", "Wait a bit to see the VISUAL DATA");
    } catch (error) {
      console.log("err ----- ", error.message);
      history.push("/");
      notification("error", "something went wrong ", error.message);
    }

    // console.log(PERDAYBYDATE, DAU, RU, NUC);
  }, [history, Clicked]);

  const { title, description, stretched } = props;

  var data = {
    labels: Day,
    datasets: [
      {
        label: "Daily_Active_User",
        backgroundColor: "rgb(255, 99, 132)",
        data: Daily_Active_User,
        stack: 1,
      },
      {
        label: "Referral_Count",
        backgroundColor: "rgb(54, 162, 235)",
        data: Referral_Count,
        stack: 1,
      },
      {
        label: "New_User_Count",
        backgroundColor: "rgb(153, 102, 255)",
        data: New_User_Count,
        stack: 1,
      },
    ],
  };

  return (
    <WidgetBox title={title} description={description} stretched={stretched}>
      <Bar stacked={true} data={data} options={settings} />
      <div style={{ width: "100%", textAlign: "center", color: "green" }}>
        ---------- Date ----------
      </div>
    </WidgetBox>
  );
};

export default SalesStats;
