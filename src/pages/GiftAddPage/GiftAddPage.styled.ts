import styled from 'styled-components';

export const GiftAddPageWrapper = styled.div`
  width: 100%;
  padding: 0 2.2rem;
`;

export const AddButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })};
  column-gap: 1.2rem;
`;
