import { Person1, Person2, Person3, Person4 } from '../../../../assets/svg';
import { ScrollAnimationContainer } from '../../../../components/ScrollAnimationContainer/ScrollAnimationContainer';
import { ScrollAnimationLeftContainer } from '../../../../components/ScrollAnimationContainer/ScrollAnimationContainerLeft';
import * as S from './StartScrollAnimation.style';
const StartScrollAnimation = () => {
  return (
    <S.PersonWrapper>
      <ScrollAnimationContainer>
        <Person1 style={{ width: '25.1rem' }} />
        <Person2 style={{ width: '21.4rem' }} />
        <Person3 style={{ width: '31.5rem' }} />
      </ScrollAnimationContainer>
      <ScrollAnimationLeftContainer>
        <Person4 style={{ width: '22.5rem' }} />
      </ScrollAnimationLeftContainer>
    </S.PersonWrapper>
  );
};

export default StartScrollAnimation;
