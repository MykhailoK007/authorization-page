import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://af43d0bdf3c7.ngrok.io'
});
