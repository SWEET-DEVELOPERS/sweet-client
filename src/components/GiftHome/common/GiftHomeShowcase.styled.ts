import styled from 'styled-components';

export const GiftHomeShowcaseWrapper = styled.section`
  width: 100%;
  padding: 0.6rem 0 0.6rem 2rem;
  margin-bottom: 7.2rem;
`;

export const NoGiftsWrapper = styled.div`
  height: 13.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_09};

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.G_03};
`;

export const GiftsWrapper = styled.div`
  width: 36rem;
  height: 22.5rem;
  padding-left: 2rem;

  display: flex;
  column-gap: 0.8rem;
  overflow-x: auto;
  justify-content: flex-start;

  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_09};
`;
