import styled from 'styled-components';

export const GiftDetailHeaderWrapper = styled.article`
  width: 100%;
  height: 5.6rem;
  margin-bottom: 0.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.fonts.body_01};
`;
