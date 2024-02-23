import { IcProfile, IcHome } from '../../assets/svg';
import { useNavigate } from 'react-router';
import * as S from './HomeMypageHeader.style';
import { useEffect, useState } from 'react';

const HomeMypageHeader = () => {
  const navigate = useNavigate();
  const userImg = localStorage.getItem('EXIT_USER_PROFILE_IMAGE');
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 처음 한 번만 실행

  const handleMyPageIcon = () => {
    navigate(`/mypage`);
  };
  const handleSettingHomeIcon = () => {
    navigate(`/`);
  };

  return (
    <S.HomeMypageHeaderWrapper>
      <IcHome style={{ width: '2.4rem' }} onClick={handleSettingHomeIcon} />
      {userImg ? (
        <S.UserProfileImg src={userImg} onClick={handleMyPageIcon} />
      ) : (
        <IcProfile style={{ width: '4.3rem' }} onClick={handleMyPageIcon} />
      )}
    </S.HomeMypageHeaderWrapper>
  );
};

export default HomeMypageHeader;
