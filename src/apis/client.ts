import axios from 'axios';

const getAccessTokenLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const accessToken = localStorage.getItem('EXIT_LOGIN_ACCESS_TOKEN');
    return accessToken;
  }
};

export const instance = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  withCredentials: false,
  headers: {
    Authorization: `${getAccessTokenLocalStorage()}`,
  },
});

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
