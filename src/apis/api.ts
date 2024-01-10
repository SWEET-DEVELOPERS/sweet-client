import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_APP_BASE_URL;

const getAccessTokenLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const accessToken = localStorage.getItem('EXIT_LOGIN_ACCESS_TOKEN');
    return accessToken;
  }
};

export const instance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${getAccessTokenLocalStorage()}`,
  },
});
