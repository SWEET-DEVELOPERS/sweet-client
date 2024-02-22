import styled from 'styled-components';
import {
  HomeBackground,
  HomeBgGradientFix,
  GradientCta,
  Main02,
  Main03,
  Main04,
} from '../../assets/svg';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';

export const Wrapper = styled.div`
  width: 37.5rem;
  height: 100vh;
  background-repeat: no-repeat;
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  margin: auto 0;
`;

export const Gradient = styled(HomeBgGradientFix)`
  position: absolute;
  top: 54rem;
  z-index: 2;
  width: 100%;
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

export const Main1 = styled(HomeBackground)`
  position: absolute;
`;

export const Main2 = styled(Main02)`
  position: absolute;
  top: 61rem;
`;

export const Main3 = styled(Main03)`
  position: absolute;
  top: 140rem;
`;

export const Main4 = styled(Main04)`
  position: absolute;
  top: 211rem;
`;
