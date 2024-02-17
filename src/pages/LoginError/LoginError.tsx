import { kakaoURL } from '../../utils/login';
import * as S from './LoginError.style';

const LoginError = () => {
  const handleLogin = () => {
    window.location.replace(kakaoURL);
  };
  return (
    <S.LoginErrorWrapper>
      <S.InfoText>로그인해 주세요</S.InfoText>
      <S.SubInfoText>
        <div>로그인 하면</div>
        선물 기록을 모아볼 수 있어요
      </S.SubInfoText>
      <S.KakaoLogin onClick={handleLogin} />
    </S.LoginErrorWrapper>
  );
};

export default LoginError;
