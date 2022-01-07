import axiosClient from "./config";

// The REST API endpoints
export const API1_URL = "https://61bc99f0d8542f001782486b.mockapi.io/api/1";
export const API2_URL = "https://61bc99f0d8542f001782486b.mockapi.io/api/2";
export const API3_URL = "https://61bc99f0d8542f001782486b.mockapi.io/api/3";
export const API4_URL = "https://61bc99f0d8542f001782486b.mockapi.io/api/4";

export const historyListInfoApi = {
  // [GET]
  get: async () => {
    const result = await axiosClient.get("/");
    return result.data;
  },

  // [POST]
  post: (postData) => {
    axiosClient.post("/", postData, {
      headers: {
        "x-access-token": "token-value",
      },
    });
  },
};
