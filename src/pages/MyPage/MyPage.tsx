import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import BtnLogout from '../../components/common/Button/Logout/BtnLogout';
import ProfileImage from './ProfileImage/ProfileImage';
import DoneGiftView from './GiftRoomView/DoneGiftView/DoneGiftView';
import ProgressGiftView from './GiftRoomView/ProgressGiftView/ProgressGiftView';
import useGetMyPage from '../../hooks/queries/member/useGetMypage';
import { MyPageType } from '../../types/member';
import * as S from './MyPage.style';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import DeleteModal from '../../components/common/Modal/DeleteModal';
import { logOutInstance } from '../../apis/client';
interface MyPage {
  memberData: MyPageType;
}

const MAX_USERNAME_LENGTH = 5;

const MyPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchAuth = async () => logOutInstance.post(`/oauth/logout`);

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

  const isLogout = () => {
    fetchAuth().then((response: any) => {
      console.log(response);
    });
    localStorage.clear();
    navigate('/');
  };
  const handleButtonClick = () => {
    setIsModalOpen(true);
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
    <>
      {isModalOpen && (
        <DeleteModal
          setIsModalOpen={setIsModalOpen}
          onClickDelete={isLogout}
          okButtonText='네, 할게요.'
        >
          정말 로그아웃하시겠어요?
        </DeleteModal>
      )}
      <S.MyPageWrapper>
        <S.TopImage />
        <S.ProfileWrapper>
          <S.UserButtonWrapper>
            <S.UserWrapper>
              <ProfileImage image={memberData?.data?.memberInfo.profileImage} />
              {renderUserName()}
            </S.UserWrapper>
            <BtnLogout handleButtonClick={handleButtonClick}>로그아웃</BtnLogout>
          </S.UserButtonWrapper>
          <BtnFill onClick={goOnboarding} customStyle={{ width: '30.3rem', height: '5.2rem' }}>
            새로운 선물 준비하기
          </BtnFill>
        </S.ProfileWrapper>
        {renderGiftRoom()}
      </S.MyPageWrapper>
    </>
  );
};

export default MyPage;
