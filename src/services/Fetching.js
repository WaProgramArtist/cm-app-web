import axios from "axios";
import https from "https";

let timeout = 300000;
let baseURL =
  process.env.REACT_APP_BASE_URL === "local"
    ? "http://localhost:81"
    : // "http://communicationapi-uat2.ivrapi.arctic.true.th"
    process.env.REACT_APP_BASE_URL === "dev"
    ? //? "http://localhost:8089"
      "http://communicationapi-uat2.ivrapi.arctic.true.th"
    : process.env.REACT_APP_BASE_URL === "uat"
    ? "http://communicationapi-uat2.ivrapi.arctic.true.th"
    : process.env.REACT_APP_BASE_URL === "prod"
    ? "http://communicationapi-prod.commuplatform.atlantic.true.th"
    : "";

export const fetching = axios.create({
  baseURL: baseURL, // set domain to axios
  timeout: timeout, // set time out call api
  headers: {
    "Content-Type": "application/json", //header content type application json
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    fetching
      .post(url, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const get = (url, data) => {
  return new Promise((resolve, reject) => {
    fetching
      .get(url, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    fetching
      .put(url, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const del = (url, data) => {
  return new Promise((resolve, reject) => {
    fetching
      .delete(url, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
