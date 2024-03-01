import styled from 'styled-components';
import bgGround from '../../../assets/img/img_tournament_background.png';
import { ImgBg } from '../../../assets/svg';

export const TournamentCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const TournamentItemWrapper = styled.section``;

export const TournamentFlowContainerWrapper = styled(ImgBg)`
  /* background-image: url(${bgGround});
  background-size: cover;
  background-repeat: no-repeat; */
  /* padding: 5.6rem 2rem; */
  position: absolute;
  height: 100vh;
`;
