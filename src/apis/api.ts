import axiosClient from './config';

// API endpoints
const API1_URL = 'https://647d98a2af9847108549f455.mockapi.io/1';
const API2_URL = 'https://647d98a2af9847108549f455.mockapi.io/2';
const API3_URL = 'https://64a3dffdc3b509573b56aeb5.mockapi.io/3';
const API4_URL = 'https://64a3dffdc3b509573b56aeb5.mockapi.io/4';

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
