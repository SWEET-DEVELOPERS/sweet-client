import { IcMypage, IcHome2 } from '../../assets/svg';
import { useNavigate } from 'react-router';
import * as S from './HomeMypageHeader.style';
import { useEffect, useState } from 'react';

const HomeMypageHeader = () => {
  const navigate = useNavigate();
  const userImg = localStorage.getItem('EXIT_USER_PROFILE_IMAGE');
  const [isTop, setIsTop] = useState(true); // 스크롤이 맨 위에 있는지 여부를 추적하는 상태

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0); // 스크롤이 맨 위에 있는지 여부를 상태에 설정
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
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
    <S.HomeMypageHeaderWrapper style={{ backgroundColor: isTop ? 'transparent' : 'white' }}>
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
