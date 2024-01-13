import styled from 'styled-components';

export const GiftHomeShowcaseHeaderWrapper = styled.article`
  width: 100%;
  height: 5.6rem;
  padding: 0 1.4rem 0 0;
  margin-bottom: 0.7srem;

  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ShowcaseTitle = styled.p`
  ${({ theme }) => theme.fonts.body_01};
`;
