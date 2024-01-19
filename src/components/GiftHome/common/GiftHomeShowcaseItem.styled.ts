import styled from 'styled-components';

export const GiftsItemWrapper = styled.div`
  width: 13rem;
  /* height: 22.5rem; */

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

export const GiftsItemImage = styled.img`
  width: 13rem;
  height: 13rem;

  object-fit: contain;

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
