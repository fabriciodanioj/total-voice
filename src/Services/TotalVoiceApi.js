import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.totalvoice.com.br',
});

export default api;
