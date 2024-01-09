import styled from 'styled-components';

export const GiftHomeDetailWrapper = styled.div`
  width: 100%;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const GiftsDetailTimerWrapper = styled.div`
  padding: 0.3rem 1rem;
  margin: 2.2rem 0 1.2rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 0.4rem;

  border-radius: 1.4rem;
  background: ${({ theme }) => theme.colors.G_01};
`;

export const GiftsDetailTimerNumbers = styled.span`
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.P_06};
`;
export const GiftsItemWrapper = styled.div`
  width: 16rem;
  height: 25.7rem;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GiftsItemImage = styled.img`
  width: 16rem;
  height: 16rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.G_03};
  border: 1px solid ${({ theme }) => theme.colors.G_02};
`;

export const GiftsItemTitle = styled.p`
  display: -webkit-box;
  width: 12.8rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  ${({ theme }) => theme.fonts.body_09};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};
  text-overflow: ellipsis;
  text-align: left;
`;

export const GiftsItemPrice = styled.span`
  ${({ theme }) => theme.fonts.body_07};
  color: ${({ theme }) => theme.colors.black};
`;

export const GiftsItemUser = styled.span`
  ${({ theme }) => theme.fonts.caption_02};
  color: ${({ theme }) => theme.colors.G_08};
`;
