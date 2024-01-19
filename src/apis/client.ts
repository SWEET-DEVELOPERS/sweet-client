import axios, { AxiosError, AxiosResponse } from 'axios';

export const getAccessTokenLocalStorage = () => {
  const accessToken = localStorage.getItem('EXIT_LOGIN_TOKEN');
  return accessToken ? `Bearer ${accessToken}` : '';
};

export const getRefreshTokenLocalStorage = () => {
  const refreshToken = localStorage.getItem('EXIT_LOGIN_REFRESH_TOKEN');
  return refreshToken ? `Bearer ${refreshToken}` : '';
};

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: false,
  headers: {},
});

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: false,
  headers: {
    Authorization: `${getAccessTokenLocalStorage()}`,
  },
});

export const refreshInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: false,
  headers: {
    Authorization: `${getRefreshTokenLocalStorage()},`,
  },
});

export async function postRefreshToken() {
  const response = await refreshInstance.get('/oauth/reissue');
  return response;
}

//토큰을 함께보내는 instance에 interceptor를 적용합니다
instance.interceptors.response.use(
  // 200번대 응답이 올때 처리
  (response) => {
    return response;
  },
  // 200번대 응답이 아닐 경우 처리
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    //토큰이 만료되을 때
    if (status === 401) {
      if (error.response.data.message === 'Unauthorized') {
        const originRequest = config;
        //리프레시 토큰 api
        const response = await postRefreshToken();
        //리프레시 토큰 요청이 성공할 때
        if (response.status === 200) {
          const newAccessToken = response.data.data.accessToken;
          localStorage.setItem('EXIT_LOGIN_TOKEN', newAccessToken);
          localStorage.setItem('EXIT_LOGIN_REFRESH_TOKEN', response.data.data.refreshToken);
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          //진행중이던 요청 이어서하기
          originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originRequest);
          //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
        } else if (response.status === 404) {
          window.location.replace('/');
        } else {
        }
      }
    }
    return Promise.reject(error);
  },
);

function interceptorResponseFulfilled(res: AxiosResponse) {
  return res.status >= 200 && res.status < 300 ? res.data : Promise.reject(res.data);
}

function interceptorResponseRejected(error: AxiosError) {
  // @ts-ignore
  return Promise.reject(new Error(error.response?.data?.message ?? error));
}

instance.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T>(...args);
}
