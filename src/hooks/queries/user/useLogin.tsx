import { instance } from '../../../apis/client';
import { LoginDataType } from '../../../types/user';

interface LoginResponseType {
  data: LoginDataType;
}

export const fetchAuth = (AUTHORIZE_CODE: string): Promise<LoginResponseType> =>
  instance.get(`/users/login?code=${AUTHORIZE_CODE}`);

export const useLogin = (AUTHORIZE_CODE: string) => {
  fetchAuth(AUTHORIZE_CODE)
    .then((response: LoginResponseType) => {
      const JWT = response.data.data.accessToken;
      if (JWT) localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
      window.location.replace('/');
    })
    .catch(() => {
      window.location.replace('/login');
    });
};
