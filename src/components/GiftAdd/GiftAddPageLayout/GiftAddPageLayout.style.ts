import styled from 'styled-components';

export const GiftAddPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center', justify: 'center' })};
`;

export const AddButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center' })};
  column-gap: 1.2rem;
`;
