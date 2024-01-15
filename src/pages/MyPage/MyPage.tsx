import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import BtnLogout from '../../components/common/Button/Logout/BtnLogout';
import ProfileImage from './ProfileImage/ProfileImage';
import Rectangle from '../../assets/img/Rectangle.png';
import DoneGiftView from './GiftRoomView/DoneGiftView/DoneGiftView';
import ProgressGiftView from './GiftRoomView/ProgressGiftView/ProgressGiftView';
import useGetMyPage from '../../hooks/queries/member/useGetMypage';
import * as S from './MyPage.style';
import { MyPageType } from '../../types/user';
interface MyPage {
  memberData: MyPageType;
}

const MyPage = () => {
  const memberData = useGetMyPage();
  console.log(memberData);
  console.log(memberData?.data);
  console.log(memberData?.data?.memberInfo);

  const userName = memberData?.data?.memberInfo.nickname;
  const translatedUserName = userName && userName.length > 5 ? userName.substring(0, 5) : userName;

  const progressRoomData = memberData?.data?.activeRooms;
  const doneMemberRoomData = memberData?.data?.closedRooms;

  //console.log(doneMemberRoomData && doneMemberRoomData[0]);

  const giftData: boolean = progressRoomData !== null && doneMemberRoomData !== null;

  return (
    <S.MyPageWrapper>
      <S.TopImage />
      <S.ProfileWrapper>
        <S.UserButtonWrapper>
          <S.UserWrapper>
            <ProfileImage image={Rectangle} />
            <S.UserName>
              <S.User>{translatedUserName}</S.User>님
            </S.UserName>
          </S.UserWrapper>
          <BtnLogout customStyle={{ width: '8.4rem', height: '2.6rem' }}>로그아웃</BtnLogout>
        </S.UserButtonWrapper>
        <BtnFill
          customStyle={{
            width: '30.3rem',
            height: '5.2rem',
          }}
        >
          새로운 선물 준비하기
        </BtnFill>
      </S.ProfileWrapper>

      {giftData ? (
        <S.GiftRoomWrapper>
          <ProgressGiftView data={progressRoomData} />
          <DoneGiftView data={doneMemberRoomData} />
        </S.GiftRoomWrapper>
      ) : (
        <S.NoneText> 아직 선물방이 없어요</S.NoneText>
      )}
    </S.MyPageWrapper>
  );
};

export default MyPage;
