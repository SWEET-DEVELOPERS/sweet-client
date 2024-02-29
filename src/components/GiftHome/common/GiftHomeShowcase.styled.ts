import styled from 'styled-components';

export const GiftHomeShowcaseWrapper = styled.section<{ $isData: boolean }>`
  width: 100%;
  padding: ${({ $isData }) => ($isData ? '0.6rem 0 0.6rem 2rem' : '0.6rem 2rem 0.6rem 2rem')};
  margin-bottom: 3.6rem;
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

  display: flex;
  column-gap: 0.8rem;
  overflow-x: auto;
  justify-content: flex-start;

  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_09};

  &::-webkit-scrollbar {
    display: none;
  }
`;
