import { IcKakoLarge } from '../../assets/svg';
import Login from '../../components/Login';
import * as S from './Start.style';

const Start = () => {
  const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <S.Wrapper>
      <IcKakoLarge onClick={handleLogin} />
    </S.Wrapper>
  );
};

export default Start;
