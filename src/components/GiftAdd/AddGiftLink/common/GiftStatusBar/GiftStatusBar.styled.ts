import styled from 'styled-components';

export const GiftStatusBarWrapper = styled.article`
  width: 100%;
  height: 3.7rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GiftsWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
`;

export const GiftsStatusText = styled.span`
  position: absolute;
  right: 2rem;
  ${({ theme }) => theme.colors.G_05};
  ${({ theme }) => theme.fonts.body_02};
`;
