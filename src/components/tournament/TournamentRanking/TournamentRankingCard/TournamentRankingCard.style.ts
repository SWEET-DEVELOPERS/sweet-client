import styled from "styled-components";


export const TournamentRankingCardWrapper = styled.div`
  display: flex;
  width: 28.6rem;
  align-items: center;
  gap: 12px;

  img {
    width: 7.2rem;
    border-radius: 1.2rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.body_05};
`;
