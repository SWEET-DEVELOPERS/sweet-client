import styled from 'styled-components';
import { IcKakoLarge } from '../../assets/svg';

export const LoginErrorWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  height: 100vh;
`;

export const InfoText = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme: { fonts } }) => fonts.body_05};
  color: ${({ theme: { colors } }) => colors.G_10};
  margin-bottom: 0.8rem;
`;

export const SubInfoText = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme: { fonts } }) => fonts.body_10};
  color: ${({ theme: { colors } }) => colors.G_07};
  margin-bottom: 2rem;
`;

export const KakaoLogin = styled(IcKakoLarge)`
  display: inline-flex;
  padding: 1rem 3.6rem;
`;
