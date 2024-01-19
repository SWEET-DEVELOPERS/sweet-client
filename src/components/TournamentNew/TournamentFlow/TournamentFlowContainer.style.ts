import styled from 'styled-components';
import bgGround from '../../../assets/img/tournament_finish_final.png';
export const TournamentCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;
export const TournamentFlowContainerWrapper = styled.section`
  background-image: url(${bgGround});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6.5rem 2rem;
  height: 100vh;
`;
