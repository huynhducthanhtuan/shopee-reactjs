import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://61bc99f0d8542f001782486b.mockapi.io/api/4",
  headers: {
    "Content-type": "application/json",
  },
});

export const headerSearchHistoryListInfoApi = {
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
