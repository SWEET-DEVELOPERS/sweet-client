import styled from 'styled-components';

export const EmptyViewWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_10};
  color: ${({ theme: { colors } }) => colors.G_07};
`;
