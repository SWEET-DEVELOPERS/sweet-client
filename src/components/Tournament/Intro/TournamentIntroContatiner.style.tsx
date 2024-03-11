import styled from 'styled-components';

export const TournamentImg = styled.div`
  width: 22.5rem;
  height: 22.5rem;
  margin: 5.6rem auto;

  animation: ani 1s infinite alternate;

  @keyframes ani {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 1rem);
    }
  }

  img {
    width: 22.5rem;
    height: 22.5rem;
    margin: 0 auto;
  }
`;

export const TournamentFlowWrapper = styled.section`
  padding: 6.8rem 2rem;
`;
