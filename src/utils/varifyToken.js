import axios from "axios";

export const varifyToken = (res) => {
  const loginToken = localStorage.getItem("id_token");

  const varified = axios({
    method: "post",
    url: `http://${document.location.hostname}:4000/user/varifytoken`,
    data: {
      loginToken: loginToken,
    },
  });

  return varified;
};
