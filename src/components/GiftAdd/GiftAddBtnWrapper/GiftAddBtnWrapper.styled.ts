import styled from 'styled-components';

export const GiftAddBtnWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 2rem;

  position: absolute;
  bottom: 0;

  margin-bottom: 2rem;
`;

export const BtnNextText = styled.span`
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.G_07};
`;

export const NoLinkText = styled.span`
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.G_07};
`;
