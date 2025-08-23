
import axios from "axios";

export const axiosInstance  = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
