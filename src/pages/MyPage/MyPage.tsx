import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import BtnLogout from '../../components/common/Button/Logout/BtnLogout';
import * as S from './MyPage.style';
import ProfileImage from './ProfileImage/ProfileImage';
import Rectangle from '../../assets/img/Rectangle.png';
import DoneGiftView from './GiftRoomView/DoneGiftView/DoneGiftView';
import ProgressGiftView from './GiftRoomView/ProgressGiftView/ProgressGiftView';

import useGetMyPage from '../../hooks/queries/user/useGetMypage';
import { instance } from '../../apis/client';
import { useEffect } from 'react';

interface TokenResponseType {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

const MyPage = () => {
  const giftData: boolean = true;

  const handleClick = () => {
    const fetchExAuth = (): Promise<TokenResponseType> => instance.post('/member/token/2');
    fetchExAuth().then((response: TokenResponseType) => {
      const data = response;
      const JWT = data.data.accessToken;
      if (data) {
        localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
        console.log(data);
        console.log(JWT);
      }

      console.log(data);
    });
    console.log(localStorage.getItem('EXIT_LOGIN_TOKEN'));
  };

  //const memberData = useGetMyPage();

  //console.log(memberData);
  return (
    <S.MyPageWrapper>
      <S.TopImage />
      <S.ProfileWrapper>
        <S.UserButtonWrapper>
          <S.UserWrapper>
            <ProfileImage image={Rectangle} />
            <S.UserName>
              <p>김스윗</p>님
            </S.UserName>
          </S.UserWrapper>
          <BtnLogout customStyle={{ width: '8.4rem', height: '2.6rem' }}>로그아웃</BtnLogout>
        </S.UserButtonWrapper>
        <BtnFill
          customStyle={{
            width: '30.3rem',
            height: '5.2rem',
          }}
          onClick={handleClick}
        >
          새로운 선물 준비하기
        </BtnFill>
      </S.ProfileWrapper>
      <S.GiftRoomWrapper>
        {giftData ? (
          <>
            <ProgressGiftView />
            <DoneGiftView />
          </>
        ) : (
          <S.NoneText> 아직 선물방이 없어요</S.NoneText>
        )}
      </S.GiftRoomWrapper>
    </S.MyPageWrapper>
  );
};

export default MyPage;
