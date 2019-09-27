import axios from "axios";
const apiRoot = "https://jsonplaceholder.typicode.com";

export default (enpoint, options) => {
  return axios(`${apiRoot}${enpoint}`, {
    ...options
  });
};
