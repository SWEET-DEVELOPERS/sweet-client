import * as S from './Start.style';
import Footer from '../../components/Footer/Footer';
import StartScrollAnimation from './StartAnimation/ScrollAnimation/ChatingAnimation/StartChatingAnimation';
import StartGiftAnimation from './StartAnimation/GiftAnimation/StartGiftAnimation';
import StartFixedButton from './StartButtonWithTokenCheck/StartButtonWithTokenCheck';
import LogoHeader from './LogoHeader/LogoHeader';
import StartStepAnimation from './StartAnimation/ScrollAnimation/StepAnimation/StartStepAnimation';
import LottieAnimation from '../../hooks/lottie-animation/LottieAnimation';
import TournamentAnimation from '../../../public/motions/start_tournament.json';
import StartDownIconAnimation from './StartAnimation/DownIconAnimation/StartDownIconAnimation';

const Start = () => {
  return (
    <S.Wrapper>
      <LogoHeader />
      <S.Main1 />
      <StartGiftAnimation />
      <StartDownIconAnimation />
      <S.Gradient />

      <StartFixedButton />
      <S.BtnGradient />

      <StartScrollAnimation />
      <S.Main2 />
      <LottieAnimation
        animation={TournamentAnimation}
        customStyle={{ position: 'absolute', top: '160rem', zIndex: '1' }}
      />
      <S.Main3 />
      <StartStepAnimation />
      <S.Main4 />
      <Footer customStyle={{ top: '283rem' }} />
    </S.Wrapper>
  );
};

export default Start;
