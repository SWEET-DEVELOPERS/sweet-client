import styled from 'styled-components';
import { IcDown, IcKakoLarge, Main03, Main04 } from '../../assets/svg';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import LottieAnimation from '../../hooks/lottie-animation/LottieAnimation';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter};
  margin: auto;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  top: -2rem;
  z-index: -1;
`;

export const TextWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter};
  position: relative;
  top: 20rem;

  margin-top: 4.4rem;

  z-index: 4;
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

export const PersonWrapper = styled.div`
  position: relative;
  top: -57rem;
`;

export const BtnFillStyle = styled(BtnFill)`
  position: fixed;
  bottom: 2rem;
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

export const Main3 = styled(Main03)`
  position: relative;
  top: -50rem;
`;

export const Main4 = styled(Main04)`
  position: relative;
  top: -50rem;
`;

export const DownIcon = styled(IcDown)`
  position: relative;
  top: -9.5rem;
  width: 4rem;
  color: ${({ theme: { colors } }) => colors.G_07};
`;
