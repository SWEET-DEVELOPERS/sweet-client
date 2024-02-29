import styled from 'styled-components';
import { IcKakaoSmall } from '../../assets/svg';

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

export const KakaoLogin = styled(IcKakaoSmall)`
  display: inline-flex;
  padding: 0 9.4rem;
`;
