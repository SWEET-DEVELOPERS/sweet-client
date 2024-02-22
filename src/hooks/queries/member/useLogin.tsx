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

interface useLoginProps {
  pageName?: string;
}

const useLogin = ({ pageName }: useLoginProps) => {
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
        const ProfileImage = data.data.userInfo.profileImage;

        console.log(data);
        if (data) {
          localStorage.setItem('EXIT_USER_PROFILE_IMAGE', ProfileImage);
          localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
          localStorage.setItem('EXIT_LOGIN_REFRESH_TOKEN', RefreshToken);
          console.log(data);
          console.log(localStorage.getItem('EXIT_LOGIN_TOKEN'));
          console.log(JWT);
          if (pageName === 'Start') {
            navigate('/');
          }
        }

        console.log(data);
      });
    }
  }, []);
};

export default useLogin;
