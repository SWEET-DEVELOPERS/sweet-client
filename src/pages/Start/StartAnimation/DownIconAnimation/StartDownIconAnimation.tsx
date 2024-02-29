import { useEffect, useState } from 'react';
import * as S from './StartDownIconAnimation.style';

const StartDownIconAnimation = () => {
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
  }, []);
  return (
    <S.DownIconWrapper>
      <S.DownIcon $isVisible={isTop} />
    </S.DownIconWrapper>
  );
};

export default StartDownIconAnimation;
