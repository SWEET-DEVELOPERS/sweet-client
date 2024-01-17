import { useState } from 'react';

const useTournament = () => {
  const [showTournamentContainer, setShowTournamentContainer] = useState(true);

  const handleStartClick = () => {
    setShowTournamentContainer(false);
  };

  return {
    showTournamentContainer,
    handleStartClick,
  };
};

export default useTournament;
