import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({ align: 'center', justify: 'center' })};
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_10};
  color: ${({ theme: { colors } }) => colors.G_07};
`;
