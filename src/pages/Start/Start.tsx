import * as S from './Start.style';
import StartHeader from '../../components/LogoHeader/LogoHeader';
import Footer from '../../components/Footer/Footer';
import StartScrollAnimation from './StartAnimation/ScrollAnimation/StartScrollAnimation';
import StartGiftAnimation from './StartAnimation/GiftAnimation/StartGiftAnimation';
import StartFixedButton from './StartButtonWithTokenCheck/StartButtonWithTokenCheck';

const Start = () => {
  return (
    <S.Wrapper>
      <StartGiftAnimation />
      <S.Gradient />
      <S.DownIcon />

      <StartFixedButton />

      <S.Main2 />
      <StartScrollAnimation />
      <S.Main3 />
      <S.Main4 />
      <Footer customStyle={{ top: '283rem' }} />
    </S.Wrapper>
  );
};

export default Start;
