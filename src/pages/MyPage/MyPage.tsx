import { MypageImage } from '../../assets/svg';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import * as S from './MyPage.style';

const MyPage = () => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.ProfileWrapper>
          <BtnFill>새로운 선물 준비하기</BtnFill>
        </S.ProfileWrapper>
      </S.TopWrapper>
      <S.GiftRoomWrapper>아직 선물방이 없어요</S.GiftRoomWrapper>
    </S.Wrapper>
  );
};

export default MyPage;
