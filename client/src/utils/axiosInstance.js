import axios from "axios";

console.log(
  window.location.protocol === "https:"
    ? window.location.hostname + "/api"
    : "http://localhost:3000/api"
);

const baseURL =
  window.location.protocol === "https:"
    ? window.location.hostname + "/api"
    : "http://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
