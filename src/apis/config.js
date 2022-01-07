import axios from "axios";
import { API4_URL } from "./api";

const axiosClient = axios.create({
  baseURL: API4_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
