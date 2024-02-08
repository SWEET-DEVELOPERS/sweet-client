import * as S from './Start.style';
//import { post } from '../../apis/client';
import StartHeader from './StartHeader/StartHeader';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import { kakaoURL } from '../../utils/login';
import StartScrollAnimation from './StartAnimatioin/ScrollAnimation';
import StartGiftAnimation from './StartAnimatioin/GiftAnimation';

// interface TokenResponseType {
//   data: {
//     accessToken: string;
//     refreshToken: string;
//   };
// }

export const isTokenExist = (): boolean => {
  const token = localStorage.getItem('EXIT_LOGIN_TOKEN'); // 'yourTokenKey'는 실제 사용하는 토큰의 키로 대체하세요
  return !!token;
};

const Start = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.replace(kakaoURL);
  };
  // const handleClick = () => {
  //   const fetchExAuth = (): Promise<TokenResponseType> => post('/member/token/2');
  //   fetchExAuth().then((response: TokenResponseType) => {
  //     const data = response;
  //     const JWT = data.data.accessToken;
  //     if (data) {
  //       localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
  //       console.log(data);
  //       console.log(localStorage.getItem('EXIT_LOGIN_TOKEN'));
  //     }
  //   });

  //   navigate('/mypage');
  // };

  const goGiftRoom = () => {
    console.log('선물방으로 이동');
    navigate('/onboarding');
  };

  return (
    <S.Wrapper>
      <StartHeader />
      <StartGiftAnimation />
      <S.Gradient />
      <S.DownIcon />

      {isTokenExist() ? (
        <BtnFill
          onClick={goGiftRoom}
          customStyle={{
            padding: '1.5rem 8.1rem 1.6rem 8.1rem',
            position: 'fixed',
            bottom: '2rem',
            zIndex: '3',
            width: '33.5rem',
          }}
        >
          새로운 선물 준비하기
        </BtnFill>
      ) : (
        <S.KakaoLogin onClick={handleLogin} />
      )}

      <S.Main2 />
      <StartScrollAnimation />
      <S.Main3 />
      <S.Main4 />
      <Footer customStyle={{ top: '283rem' }} />
    </S.Wrapper>
  );
};

export default Start;
