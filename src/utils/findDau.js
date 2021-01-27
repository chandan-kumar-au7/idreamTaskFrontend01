import axios from "axios";

export const findDau = (From, To) => {
  const DAU = axios({
    method: "post",
    url: `http://${document.location.hostname}:4000/dau/getdau`,
    data: {
      from: From,
      to: To,
    },
  });

  return DAU;
};
