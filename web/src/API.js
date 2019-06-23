import axios from 'axios';

const API_URL = process.env.API_URL;

const requests = {
  get: async (url, config) =>
    (await axios.get(`${API_URL}${url}`, config)).data,
  post: async (url, body, config) =>
    (await axios.post(`${API_URL}${url}`, body, config)).data,
  put: async (url, body) => (await axios.put(`${API_URL}${url}`, body)).data,
  delete: async (url) => (await axios.delete(`${API_URL}${url}`)).data
};

export default {
  search: (body) => {
    return requests.post('/search', body);
  }
};
