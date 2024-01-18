import { useEffect } from 'react';
import { authInstance } from '../../../apis/client';
import { useNavigate } from 'react-router';

interface LoginResponseType extends Response {
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

const useLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  const fetchAuth = (code: string): Promise<LoginResponseType> =>
    authInstance.get(`/oauth/kakao/login?code=${code}`);

  useEffect(() => {
    if (code) {
      console.log('실행');
      fetchAuth(code).then((response: any) => {
        const data = response.data;

        const JWT = data.data.memberToken.accessToken;
        const RefreshToken = data.data.memberToken.refreshToken;
        console.log(data);
        if (data) {
          localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
          localStorage.setItem('EXIT_LOGIN_REFRESH_TOKEN', RefreshToken);
          console.log(data);

          console.log(JWT);

          navigate('/');
        }

        console.log(data);
      });
    }
  }, []);
};

export default useLogin;
