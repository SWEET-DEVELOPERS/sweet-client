import styled from 'styled-components';

export const GiftAddBtnWrapper = styled.article`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 2rem;

  margin-bottom: 2rem;
`;

export const BtnNextText = styled.span`
  ${({ theme }) => theme.fonts.body_09};
`;

export const NoLinkText = styled.span`
  cursor: pointer;

  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.G_07};
`;
