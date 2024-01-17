import styled from 'styled-components';

export const FallBackWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;

export const Icon = styled.div`
  margin-top: 19rem;
`;

export const BoldText = styled.div`
  ${({ theme: { fonts } }) => fonts.body_03};
  color: ${({ theme: { colors } }) => colors.black};
  margin-top: 1.6rem;
`;

export const LightText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme: { fonts } }) => fonts.body_07};
  color: ${({ theme: { colors } }) => colors.G_07};
  margin-top: 0.8rem;
`;
