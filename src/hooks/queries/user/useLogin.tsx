import { useEffect } from 'react';
import { instance } from '../../../apis/client';
import { LoginDataType } from '../../../types/user';

interface LoginResponseType {
  data: LoginDataType;
}

export const useLogin = () => {
  const code = new URL(window.location.href).searchParams.get('code');

  const fetchAuth = (code: string): Promise<LoginResponseType> =>
    instance.get(`/oauth/kakao/login?code=${code}`);

  useEffect(() => {
    if (code) {
      console.log('실행');
      fetchAuth(code).then((response: LoginResponseType) => {
        const data = response.data;
        const JWT = response.data.memberToken.accessToken;
        if (JWT) {
          localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
        }
        console.log(JWT);
        console.log(data);
      });
    }
  }, []);
};
