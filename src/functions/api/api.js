import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // base URL backend Fiber
  withCredentials: true, // untuk kirim cookie token
});

export default api;
