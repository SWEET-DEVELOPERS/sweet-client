import React from 'react';
import * as S from './Login.style';
import { IcKakoLarge } from '../../assets/svg';

const Login = () => {
  const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <S.Container>
      <IcKakoLarge onClick={handleLogin} />
    </S.Container>
  );
};

export default Login;
