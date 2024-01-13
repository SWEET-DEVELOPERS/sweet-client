import { useState } from 'react';
import * as S from './TournamentContatiner.style';

import TournamentStartText from './TournamentStartText/TournamentStartText';
import TournamentItemCount from './TournamentItemCount/TournamentItemCount';
import { Svg3Dicons } from '../../../assets/svg';
import TournamentStartButton from './TournamentStartButton/TournamentStartButton';
import TournamentFlowContainer from '../TournamentFlow/TournamentFlowContainer';

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
