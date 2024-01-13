import styled from 'styled-components';

export const GiftsItemWrapper = styled.div`
  width: 15.8rem;
  padding: 0;
  margin-top: 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GiftsItemImage = styled.img`
  width: 15.8rem;
  height: 15.8rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.G_03};
`;

export const GiftsItemTitle = styled.p`
  width: 12.8rem;
  margin-top: 1.2rem;
  margin-bottom: 1rem;

  display: -webkit-box;
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

export const IcEmptyBoxWrapper = styled.div`
  width: 15.8rem;
  margin-top: 9.3rem;
`;
