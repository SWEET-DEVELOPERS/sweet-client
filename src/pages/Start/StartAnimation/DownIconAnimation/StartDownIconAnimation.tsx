import { ScrollAnimationUpContainer } from '../../../../components/ScrollAnimationContainer/ScrollAnimationContainerUp';
import * as S from './StartDownIconAnimation.style';

const StartDownIconAnimation = () => {
  return (
    <S.DownIconWrapper>
      <ScrollAnimationUpContainer>
        <S.DownIcon />
      </ScrollAnimationUpContainer>
    </S.DownIconWrapper>
  );
};

export default StartDownIconAnimation;
