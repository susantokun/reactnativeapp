import Axios from 'axios';
import envs from './env';

export const http = Axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const axios = Axios.create({
  baseURL: envs.API_URL,
  headers: {
    Accept: '*',
    'Content-Type': 'multipart/form-data',
  },
});
