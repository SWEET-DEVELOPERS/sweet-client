import { LeftContainer } from './ScrollAnimation.style';
import { useScrollAnimation } from './useScrollAnimation';

type PropsType = {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
};

export const ScrollAnimationLeftContainer = ({ children, customStyle }: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <LeftContainer style={customStyle} ref={ref} className={isInViewport ? 'frame-in' : ''}>
      {children}
    </LeftContainer>
  );
};
