import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { settings } from "./config";
import WidgetBox from "../WidgetBox";
import axios from "axios";

import { notification } from "../../../components";

var data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
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

const SalesStats = (props) => {
  const history = useHistory();

  // const [Daily_Active_User, setDaily_Active_User] = useState(0);
  // const [Referral_Count, setReferral_Count] = useState(0);
  // const [New_User_Count, setNew_User_Count] = useState(0);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://${document.location.hostname}:4000/dau/getdau`,
      }).then((dauData) => {
        console.log(dauData);
      });

      notification("success", "You Can See the Dau Data In console now");
    } catch (error) {
      console.log("err ----- ", error.message);
      history.push("/signin");
      notification("error", "something went wrong ", error.message);
    }
  }, [history]);

  const { title, description, stretched } = props;

  return (
    <WidgetBox title={title} description={description} stretched={stretched}>
      <Bar stacked={true} data={data} options={settings} />
    </WidgetBox>
  );
};

export default SalesStats;
