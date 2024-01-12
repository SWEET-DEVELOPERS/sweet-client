import { MypageImage } from '../../assets/svg';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import BtnLogout from '../../components/common/Button/Logout/BtnLogout';
import * as S from './MyPage.style';
import ProfileImage from './ProfileImage/ProfileImage';
import Rectangle from '../../assets/img/Rectangle.png';

const MyPage = () => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.ProfileWrapper>
          <S.UserButtonWrapper>
            <S.UserWrapper>
              <ProfileImage image={Rectangle} />
              <S.UserName>
                <p>김스윗</p>님
              </S.UserName>
            </S.UserWrapper>
            <BtnLogout>로그아웃</BtnLogout>
          </S.UserButtonWrapper>
          <BtnFill>새로운 선물 준비하기</BtnFill>
        </S.ProfileWrapper>
      </S.TopWrapper>
      <S.GiftRoomWrapper>아직 선물방이 없어요</S.GiftRoomWrapper>
    </S.Wrapper>
  );
};

export default MyPage;
