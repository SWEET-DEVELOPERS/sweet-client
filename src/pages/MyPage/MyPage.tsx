import { MypageImage } from '../../assets/svg';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import BtnLogout from '../../components/common/Button/Logout/BtnLogout';
import * as S from './MyPage.style';
import ProfileImage from './ProfileImage/ProfileImage';
import Rectangle from '../../assets/img/Rectangle.png';
import DoneGiftView from './GiftRoomView/DoneGiftView/DoneGiftView';
import ProgressGiftView from './GiftRoomView/ProgressGiftView/ProgressGiftView';

const MyPage = () => {
  const giftData: boolean = true;
  return (
    <S.Wrapper>
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
        <BtnFill>새로운 선물 준비하기</BtnFill>
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
    </S.Wrapper>
  );
};

export default MyPage;
