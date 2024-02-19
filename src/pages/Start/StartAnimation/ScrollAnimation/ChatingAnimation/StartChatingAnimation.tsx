import { Person1, Person2, Person3, Person4 } from '../../../../../assets/svg';
import { ScrollAnimationContainer } from '../../../../../components/ScrollAnimationContainer/ScrollAnimationContainer';
import { ScrollAnimationLeftContainer } from '../../../../../components/ScrollAnimationContainer/ScrollAnimationContainerLeft';
import * as S from './StartChatingAnimation.style';
const StartChatingAnimation = () => {
  return (
    <S.PersonWrapper>
      <ScrollAnimationContainer>
        <Person1 style={{ width: '25.1rem' }} />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer>
        <Person2 style={{ width: '21.4rem' }} />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer>
        <Person3 style={{ width: '31.5rem' }} />
      </ScrollAnimationContainer>
      <ScrollAnimationLeftContainer customStyle={{ marginTop: '2.5rem' }}>
        <Person4 style={{ width: '22.5rem' }} />
      </ScrollAnimationLeftContainer>
    </S.PersonWrapper>
  );
};

export default StartChatingAnimation;
