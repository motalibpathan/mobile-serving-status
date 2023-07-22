import axios from "axios";

const axiosInstance = axios.create({
  baseURL: window.location.hostname.includes("https")
    ? window.location.hostname.includes("https") + "/api"
    : "http://localhost:3000/api",
});

export default axiosInstance;
