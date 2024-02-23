import { Step1, Step2, Step3 } from '../../../../../assets/svg';
import { ScrollAnimationContainer } from '../../../../../components/ScrollAnimationContainer/ScrollAnimationContainer';
import * as S from './StartStepAnimation.style';
const StartStepAnimation = () => {
  return (
    <S.StepWrapper>
      <ScrollAnimationContainer>
        <Step1 style={{ width: '33.5rem' }} />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer>
        <Step2 style={{ width: '33.5rem' }} />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer>
        <Step3 style={{ width: '33.5rem' }} />
      </ScrollAnimationContainer>
    </S.StepWrapper>
  );
};

export default StartStepAnimation;
