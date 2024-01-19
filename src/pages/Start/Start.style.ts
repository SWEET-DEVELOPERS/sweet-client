import styled from 'styled-components';
import {
  HomeBgGradientFix,
  HomeCtaBgGradient,
  IcDown,
  IcKakoLarge,
  Main02,
  Main03,
  Main04,
} from '../../assets/svg';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter};
  margin: auto;
  height: fit-content;
`;

export const TextWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter};
  position: absolutes;

  margin-top: 4.4rem;

  z-index: 1;
`;

export const TitleText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter};
  text-align: center;
  font-family: 'SUIT';
  font-size: 42px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  background: linear-gradient(180deg, #ff2176 0%, #ff4d8f 47.69%, #ffa1c1 140.68%);
  -webkit-background-clip: text;
  color: transparent;
`;

export const SubTitleText = styled.div`
  color: ${({ theme: { colors } }) => colors.G_07};
  text-align: center;
  font-family: 'SUIT';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;

  margin-top: 2.7rem;
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

export const PersonWrapper = styled.div`
  position: absolute;
  top: 86rem;
  z-index: 1;
`;

export const BtnFillStyle = styled(BtnFill)`
  position: fixed;
  z-index: 3;
  width: 33.5rem;
  margin: 2rem;
`;

export const KakaoLogin = styled(IcKakoLarge)`
  position: fixed;
  bottom: 0;
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
  top: 220rem;
`;

export const DownIcon = styled(IcDown)`
  position: absolute;
  top: 53rem;
  width: 4rem;
  color: ${({ theme: { colors } }) => colors.G_07};
`;
