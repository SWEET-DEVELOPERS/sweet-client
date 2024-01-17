import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import * as S from './LottieAnimation.style';

interface LottieAnimationProps {
  animation: any;
  customStyle?: React.CSSProperties;
}

const LottieAnimation = ({ animation, customStyle }: LottieAnimationProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim: AnimationItem = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animation, // animationData로 변경
      });

      return () => {
        anim.destroy();
      };
    }
  }, [animation]);
  return <S.LottieAnimationWrapper ref={containerRef} style={customStyle} />;
};

export default LottieAnimation;
