import axios from 'axios';

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

const refreshToken = localStorage.getItem('EXIT_LOGIN_REFRESH_TOKEN');
const accessToken = localStorage.getItem('EXIT_LOGIN_TOKEN');

export async function postRefreshToken() {
  const response = await authInstance.post('/oauth/reissue', {
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
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
    const originalConfig = error.config;
    const msg = error.response.data.message;
    const status = error.response.data.status;

    //토큰이 만료되을 때
    if (status === 401) {
      console.log('401에러가 떠서 interceptor 실행한다.');
      if (msg == '액세스 토큰이 만료되었습니다. 재발급 받아주세요.') {
        console.log('엑세스 토큰 만료 메세지 인식 했다.');


        // access 토큰 재발급 api
        const response = await postRefreshToken();
        //access 토큰 요청이 성공할 때
        if (response.status === 200) {
          console.log('엑세스 토큰 api 요청 성공했다.');
          const newAccessToken = response.data.accessToken;
          localStorage.setItem('EXIT_LOGIN_TOKEN', newAccessToken);
          localStorage.setItem('EXIT_LOGIN_REFRESH_TOKEN', response.data.refreshToken);
          axios.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
          //진행중이던 요청 이어서하기
          originalConfig.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalConfig);
        } else {
          console.log('accessToken 재 요청 실패');
        }
      } //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
      else if (msg == '리프레시 토큰이 만료되었습니다. 다시 로그인해 주세요.') {

        console.log('리프레쉬 토큰 만료 메세지 인식 했다.');


        localStorage.clear();
        window.location.replace('/');
        window.alert('토큰이 만료되어 자동으로 로그아웃 되었습니다.');
      }
    }
    return Promise.reject(error);
  },
);

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
