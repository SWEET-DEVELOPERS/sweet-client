import styled from 'styled-components';

export const GiftAddBtnWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  position: absolute;
  bottom: 0;
  padding: 0 2rem 2rem 0;
`;

export const BtnNextText = styled.span`
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.G_07};
`;
