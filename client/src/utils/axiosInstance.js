import axios from "axios";

const baseURL =
  window.location.protocol === "https:"
    ? window.location.hostname + "/api"
    : "http://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
