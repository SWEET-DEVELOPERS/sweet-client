import { IcMypage, IcHome2 } from '../../assets/svg';
import { useNavigate } from 'react-router';
import * as S from './HomeMypageHeader.style';

const HomeMypageHeader = () => {
  const navigate = useNavigate();
  const userImg = localStorage.getItem('EXIT_USER_PROFILE_IMAGE');

  const handleMyPageIcon = () => {
    navigate(`/mypage`);
  };
  const handleSettingHomeIcon = () => {
    navigate(`/`);
  };

  return (
    <S.HomeMypageHeaderWrapper>
      <IcHome2 style={{ width: '2.4rem' }} onClick={handleSettingHomeIcon} />
      {userImg ? (
        <S.UserProfileImg src={userImg} onClick={handleMyPageIcon} />
      ) : (
        <IcMypage style={{ width: '4.3rem' }} onClick={handleMyPageIcon} />
      )}
    </S.HomeMypageHeaderWrapper>
  );
};

export default HomeMypageHeader;
