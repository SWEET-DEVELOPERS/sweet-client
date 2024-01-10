import TournamentStartText from './tournamentStartText/TournamentStartText';
import TournamentItemCount from './tournamentItemCount/TournamentItemCount';
import styled from 'styled-components';
import { Svg3Dicons } from '../../../assets/svg';
import TournamentStartButton from './tournamentStartButton/TournamentStartButton';
import { useState } from 'react';
import TournamentFlowContainer from '../TournamentFlowContainer';

export default function TournamentConatainer() {
  const [showTournamentContainer, setShowTournamentContainer] = useState(true);

  const handleStartClick = () => {
    setShowTournamentContainer(false);
  };
  return (
    <>
      {showTournamentContainer && (
        <>
          <TournamentStartText />
          <TournamentItemCount />
          <TournamentImg>
            <Svg3Dicons />
          </TournamentImg>
          <TournamentStartButton onClick={handleStartClick} />
        </>
      )}

      {!showTournamentContainer && <TournamentFlowContainer />}
    </>
  );
}

const TournamentImg = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
`;
