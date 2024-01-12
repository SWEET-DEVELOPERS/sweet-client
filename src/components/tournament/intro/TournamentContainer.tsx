import TournamentStartText from './tournamentStartText/TournamentStartText';
import TournamentItemCount from './tournamentItemCount/TournamentItemCount';
import * as S from './TournamentContatiner.style';
import { Svg3Dicons } from '../../../assets/svg';
import TournamentStartButton from './tournamentStartButton/TournamentStartButton';
import { useState } from 'react';

import TournamentFlowContainer from '../TournamentFlowContainer';

const TournamentContainer = () => {

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
          <S.TournamentImg>
            <Svg3Dicons />
          </S.TournamentImg>
          <TournamentStartButton onClick={handleStartClick} />
        </>
      )}

      {!showTournamentContainer && <TournamentFlowContainer />}
    </>
  );

};

export default TournamentContainer;

