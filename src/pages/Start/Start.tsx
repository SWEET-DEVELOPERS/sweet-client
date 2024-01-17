import { useNavigate } from 'react-router';
import { IcKakoLarge, Main03, Main04, Person1, Person2, Person3, Person4 } from '../../assets/svg';
import * as S from './Start.style';
// import LottieAnimation from '../../hooks/lottie-animation/LottieAnimation';
// import SweetHomeAnimation from '../../../public/motions/motion_02.json';
// import { useEffect, useRef, useState } from 'react';
import { ScrollAnimationContainer } from '../../components/ScrollAnimationContainer/ScrollAnimationContainer';
import StartHeader from './StartHeader/StartHeader';
import { post } from '../../apis/client';
import Footer from '../../components/Footer/Footer';

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
      <StartHeader />
      <IcKakoLarge onClick={handleClick} />
      {/* <S.Animation>
        <LottieAnimation animation={SweetHomeAnimation} customStyle={{ width: '37.5rem' }} />
      </S.Animation> */}

      <S.MainSecond>
        <S.PersonWrapper>
          <ScrollAnimationContainer>
            <Person1 style={{ width: '25.1rem' }} />
          </ScrollAnimationContainer>
          <ScrollAnimationContainer>
            <Person2 style={{ width: '21.4rem' }} />
          </ScrollAnimationContainer>
          <ScrollAnimationContainer>
            <Person3 style={{ width: '31.5rem' }} />
          </ScrollAnimationContainer>
          <ScrollAnimationContainer>
            <Person4 style={{ width: '22.5rem' }} />
          </ScrollAnimationContainer>
        </S.PersonWrapper>
      </S.MainSecond>
      <Main03 />
      <Main04 />
      <Footer />
    </S.Wrapper>
  );
};

export default Start;
