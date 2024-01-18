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
  position: relative;

  margin-top: 4.4rem;

  z-index: 1;
`;

export const TitleText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter};
  position: relative;
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
  position: relative;
  top: -48rem;
  z-index: 2;
`;

export const BtnGradient = styled(HomeCtaBgGradient)`
  position: fixed;
  z-index: 4;
`;

export const PersonWrapper = styled.div`
  position: relative;
  top: -108rem;
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
  position: relative;
  top: -52rem;
`;

export const Main3 = styled(Main03)`
  position: relative;
  top: -100rem;
`;

export const Main4 = styled(Main04)`
  position: relative;
  top: -100rem;
`;

export const DownIcon = styled(IcDown)`
  position: relative;
  top: -58rem;
  width: 4rem;
  color: ${({ theme: { colors } }) => colors.G_07};
`;
