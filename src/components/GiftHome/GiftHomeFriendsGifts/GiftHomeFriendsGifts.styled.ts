import styled from 'styled-components';

export const GiftHomeFriendsGiftsWrapper = styled.section`
  width: 100%;
  padding: 0.6rem 0 0.6rem 2rem;
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
  height: 22.5rem;

  display: flex;
  justify-content: flex-start;

  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_09};
`;

export const GiftsItemWrapper = styled.div`
  width: 13rem;
  height: 22.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GiftsItemImage = styled.img`
  width: 13rem;
  height: 13rem;

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
  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.black};
`;

export const GiftsItemUser = styled.span`
  ${({ theme }) => theme.fonts.caption_02};
  color: ${({ theme }) => theme.colors.G_08};
`;
