import { useState } from 'react';
import mockupData from '../../core/mockupData';
import { GiftData } from '../../core/mockupData';

const useTournament = () => {
  const [showTournamentContainer, setShowTournamentContainer] = useState(true);
  const [randomItems, setRandomItems] = useState<GiftData[][]>([]);

  const handleStartClick = () => {
    const shuffledData = [...mockupData].sort(() => 0.5 - Math.random());
    let selectedItems = [];

    for (let i = 0; i < shuffledData.length; i += 2) {
      selectedItems.push([shuffledData[i], shuffledData[i + 1]]);
    }

    setRandomItems(selectedItems);
    setShowTournamentContainer(false);
  };

  return {
    showTournamentContainer,
    randomItems,
    handleStartClick,
  };
};

export default useTournament;
