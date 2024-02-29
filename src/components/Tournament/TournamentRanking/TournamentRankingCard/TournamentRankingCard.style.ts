import styled from 'styled-components';

export const TournamentRankingCardWrapper = styled.div`
  display: flex;
  width: 28.6rem;
  align-items: center;
  gap: 12px;

  img {
    width: 7.2rem;
    height: auto;
    aspect-ratio: 1 / 1;

    border-radius: 1.2rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  ${({ theme }) => theme.fonts.body_05};
`;
