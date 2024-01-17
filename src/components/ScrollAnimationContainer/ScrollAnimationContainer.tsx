import { Container } from './ScrollAnimation.style';
import { useScrollAnimation } from './useScrollAnimation';

type PropsType = {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
};

export const ScrollAnimationContainer = ({ children, customStyle }: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Container style={customStyle} ref={ref} className={isInViewport ? 'frame-in' : ''}>
      {children}
    </Container>
  );
};
