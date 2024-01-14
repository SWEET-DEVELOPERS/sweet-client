import styled from 'styled-components';

export const GiftHomeHeaderWrapper = styled.article`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 5.6rem;
  padding: 0 1.6rem 0 0.7rem;
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })};
  background-color: ${({ theme }) => theme.colors.white};
`;
