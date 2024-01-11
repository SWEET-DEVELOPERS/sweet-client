import { useEffect } from 'react';
import { instance } from '../../../apis/client';

interface LoginResponseType {
  data: {
    data: {
      userInfo: {
        memberId: number;
        socialId: number;
        nickname: string;
        profileImage: string;
      };
      memberToken: {
        accessToken: string;
        refreshToken: string;
      };
    };
  };
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
        const JWT = data.data.memberToken;
        if (data) {
          //localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
          console.log(data);
          console.log(JWT);
        }

        console.log(data);
      });
    }
  }, []);
};
