import styled from 'styled-components';

export const AddGiftWithLinkLayoutWrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddGiftWithLinkHeader = styled.div`
  width: 100%;
  height: 5.6rem;
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })};
`;
