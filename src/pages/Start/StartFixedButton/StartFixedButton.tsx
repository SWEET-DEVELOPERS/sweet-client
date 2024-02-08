import { useNavigate } from 'react-router-dom';
import BtnFill from '../../../components/common/Button/Cta/fill/BtnFill';
import { kakaoURL } from '../../../utils/login';
//import { post } from '../../apis/client';
import * as S from './StartFixedButton.style';

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

const StartFixedButton = () => {
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
    <>
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
    </>
  );
};

export default StartFixedButton;
