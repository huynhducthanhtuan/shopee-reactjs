import axiosClient from './config';

// API endpoints
const API1_URL = process.env.REACT_APP_API1_URL;
const API2_URL = process.env.REACT_APP_API2_URL;
const API3_URL = process.env.REACT_APP_API3_URL;
const API4_URL = process.env.REACT_APP_API4_URL;

const historyListInfoApi = {
  get: async () => {
    const result = await axiosClient.get('/');
    return result.data;
  },

  post: (postData) => {
    axiosClient.post('/', postData, {
      headers: {
        'x-access-token': 'token-value'
      }
    });
  }
};

export { API1_URL, API2_URL, API3_URL, API4_URL, historyListInfoApi };
