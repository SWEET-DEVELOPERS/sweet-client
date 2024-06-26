import styled from 'styled-components';
import { HomeBgGradientFix, GradientCta } from '../../assets/svg';
import HomeBackgroundWebP from '../../assets/img/home_background.webp';
import Main02WebP from '../../assets/img/main02.webp';
import Main03WebP from '../../assets/img/main03.webp';
import Main04WebP from '../../assets/img/main04.webp';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  margin: auto 0;
`;

export const Gradient = styled(HomeBgGradientFix)`
  position: absolute;
  top: 54rem;
  z-index: 2;
`;

export const BtnGradient = styled(GradientCta)`
  position: fixed;
  z-index: 2;
  bottom: 0;
`;

export const BtnFillStyle = styled(BtnFill)`
  position: fixed;
  z-index: 3;
  width: 33.5rem;
  margin: 2rem;
`;

export const Main1 = styled.div`
  background-image: url(${HomeBackgroundWebP});
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 85vh;
`;

export const Main2 = styled.div`
  background-image: url(${Main02WebP});
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  top: 61rem;
  width: 100%;
  height: 120vh;
`;

export const Main3 = styled.div`
  background-image: url(${Main03WebP});
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  top: 140rem;
  width: 100%;
  height: 100vh;
`;

export const Main4 = styled.div`
  background-image: url(${Main04WebP});
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  top: 211rem;
  width: 100%;
  height: 100vh;
`;
