import * as S from './Start.style';
import Footer from '../../components/Footer/Footer';
import StartScrollAnimation from './StartAnimation/ScrollAnimation/ChatingAnimation/StartChatingAnimation';
import StartGiftAnimation from './StartAnimation/GiftAnimation/StartGiftAnimation';
import StartFixedButton from './StartButtonWithTokenCheck/StartButtonWithTokenCheck';
import LogoHeader from './LogoHeader/LogoHeader';
import StartStepAnimation from './StartAnimation/ScrollAnimation/StepAnimation/StartStepAnimation';

const Start = () => {
  return (
    <S.Wrapper>
      <LogoHeader />
      <StartGiftAnimation />
      <S.Gradient />
      <S.DownIcon />

      <StartFixedButton />

      <S.Main2 />
      <StartScrollAnimation />
      <S.Main3 />
      <StartStepAnimation />
      <S.Main4 />
      <Footer customStyle={{ top: '283rem' }} />
    </S.Wrapper>
  );
};

export default Start;
