import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const TournamentWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 999;
  /* top: 36rem;
  z-index: 50; */
`;

export const AnimatedTournament = styled.div<{ $animationDelay: string; $style: string }>`
  position: relative;
  top: ${(props) => props.$style};
  animation: ${slideIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.$animationDelay};
`;
