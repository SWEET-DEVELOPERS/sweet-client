import { UpContainer } from './ScrollAnimation.style';
import { useScrollAnimation } from './useScrollAnimation';

type PropsType = {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
};

export const ScrollAnimationUpContainer = ({ children, customStyle }: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <UpContainer style={customStyle} ref={ref} className={isInViewport ? 'frame-in' : ''}>
      {children}
    </UpContainer>
  );
};
