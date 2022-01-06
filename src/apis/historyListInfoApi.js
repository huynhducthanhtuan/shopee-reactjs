import axios from "axios";
import { API4_URL } from "./api";

const apiClient = axios.create({
  baseURL: API4_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const historyListInfoApi = {
  // [GET]
  get: async () => {
    const result = await apiClient.get("/");
    return result.data;
  },

  // [POST]
  post: (postData) => {
    return apiClient.post("/", postData, {
      headers: {
        "x-access-token": "token-value",
      },
    });
  },

  // [DELETE]
  delete: (id) => {
    return apiClient.delete(`${id}`);
  },
};
