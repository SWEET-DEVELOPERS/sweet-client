import styled from 'styled-components';

export const GiftHomeMyGifts = styled.div`
  display: flex;
  margin-bottom: 1.2rem;

  height: 7rem;

  img {
    width: 7rem;
    height: 7rem;
    border-radius: 0.6rem;
    object-fit: cover;
  }
`;

export const GiftHomeMygiftsImg = styled.img`
  height: 7rem;
  width: 7rem;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.6rem;
  margin-top: 1.2rem;
`;

export const Title = styled.p`
  width: 24.9rem;
  height: 2.1rem;
  margin-bottom: 0.4rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};
  text-overflow: ellipsis;

  ${({ theme }) => theme.fonts.body_05};
`;
