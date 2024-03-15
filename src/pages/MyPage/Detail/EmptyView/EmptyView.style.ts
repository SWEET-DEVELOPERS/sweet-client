import styled from 'styled-components';

export const EmptyViewWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  height: 100%;
  gap: 1.2rem;
  margin: 0 2rem;
`;

export const EmptyText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme: { fonts } }) => fonts.body_10};
  color: ${({ theme: { colors } }) => colors.G_07};
`;
