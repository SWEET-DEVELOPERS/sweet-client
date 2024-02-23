import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import BtnLogout from '../../components/common/Button/Logout/BtnLogout';
import ProfileImage from './ProfileImage/ProfileImage';
import DoneGiftView from './GiftRoomView/DoneGiftView/DoneGiftView';
import ProgressGiftView from './GiftRoomView/ProgressGiftView/ProgressGiftView';
import useGetMyPage from '../../hooks/queries/member/useGetMypage';
import { MyPageType } from '../../types/member';
import * as S from './MyPage.style';
import { useNavigate } from 'react-router';
interface MyPage {
  memberData: MyPageType;
}

const MAX_USERNAME_LENGTH = 5;

const MyPage = () => {
  const navigate = useNavigate();

  const memberData = useGetMyPage();

  const goOnboarding = () => {
    navigate('/onboarding');
  };

  const renderGiftRoom = () => {
    const progressRoomData = memberData?.data?.activeRooms;
    const doneMemberRoomData = memberData?.data?.closedRooms;
    return progressRoomData && doneMemberRoomData ? (
      <S.GiftRoomWrapper>
        <ProgressGiftView data={progressRoomData} />
        <DoneGiftView data={doneMemberRoomData} />
      </S.GiftRoomWrapper>
    ) : (
      <S.NoneText> 아직 선물방이 없어요</S.NoneText>
    );
  };

  const renderUserName = () => {
    const userName = memberData?.data?.memberInfo.nickname;
    const translatedUserName =
      userName && userName.length > MAX_USERNAME_LENGTH
        ? `${userName.substring(0, MAX_USERNAME_LENGTH)}...`
        : userName;
    return (
      <S.UserName>
        <span>{translatedUserName} </span>님
      </S.UserName>
    );
  };

  return (
    <S.MyPageWrapper>
      <S.TopImage />
      <S.ProfileWrapper>
        <S.UserButtonWrapper>
          <S.UserWrapper>
            <ProfileImage image={memberData?.data?.memberInfo.profileImage} />
            {renderUserName()}
          </S.UserWrapper>
          <BtnLogout customStyle={{ width: '8.4rem', height: '2.6rem' }}>로그아웃</BtnLogout>
        </S.UserButtonWrapper>
        <BtnFill onClick={goOnboarding} customStyle={{ width: '30.3rem', height: '5.2rem' }}>
          새로운 선물 준비하기
        </BtnFill>
      </S.ProfileWrapper>
      {renderGiftRoom()}
    </S.MyPageWrapper>
  );
};

export default MyPage;
