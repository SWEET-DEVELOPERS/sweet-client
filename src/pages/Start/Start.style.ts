import styled from 'styled-components';
import HomeBg from '../../assets/img/home_bg11.png';
import {
  HomeBgGradientFix,
  HomeCtaBgGradient,
  IcDown,
  Main02,
  Main03,
  Main04,
} from '../../assets/svg';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';

export const Wrapper = styled.div`
  background-image: url(${HomeBg});
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  ${({ theme: { mixin } }) => mixin.flexCenter};
  margin: auto;
  background-color: #fafafa;
`;

export const Gradient = styled(HomeBgGradientFix)`
  position: absolute;
  top: 55rem;
  z-index: 2;
`;

export const BtnGradient = styled(HomeCtaBgGradient)`
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

export const Main2 = styled(Main02)`
  position: absolute;
  top: 62rem;
`;

export const Main3 = styled(Main03)`
  position: absolute;
  top: 140rem;
`;

export const Main4 = styled(Main04)`
  position: absolute;
  top: 211rem;
`;

export const DownIcon = styled(IcDown)`
  position: absolute;
  top: 53rem;
  width: 4rem;
  color: ${({ theme: { colors } }) => colors.G_07};
`;
