import { useNavigate } from 'react-router';
import { IcKakoLarge } from '../../assets/svg';
import * as S from './Start.style';
import { post } from '../../apis/client';

interface TokenResponseType {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

const Start = () => {
  // const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  // const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI || '';
  // const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   window.location.replace(kakaoURL);
  // };
  const handleClick = () => {
    const fetchExAuth = (): Promise<TokenResponseType> => post('/member/token/2');
    fetchExAuth().then((response: TokenResponseType) => {
      const data = response;
      const JWT = data.data.accessToken;
      if (data) {
        localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
        //console.log(data);
      }
    });

    navigate('/mypage');
  };
  return (
    <S.Wrapper>
      <IcKakoLarge onClick={handleClick} />
    </S.Wrapper>
  );
};

export default Start;
