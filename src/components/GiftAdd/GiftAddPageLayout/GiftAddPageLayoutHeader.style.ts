import styled from 'styled-components';

export const GiftAddPageLayoutHeader = styled.article`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })};

  width: 100%;
  height: 5.6rem;
  padding-left: 0.7rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderText = styled.p`
  ${({ theme }) => theme.fonts.body_01};
`;
