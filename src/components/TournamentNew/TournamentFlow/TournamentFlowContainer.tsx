import React, { useState } from 'react';
import TournamentCard from './TournamentCard/TournamentCard';
import { TournamentCardWrapper } from './TournamentFlowContainer.style';
import TournamentFooter from './TournamentFooter/TournamentFooter';
import TournamentTitle from './TournamentTitle/TournamentTitle';
import { GiftData } from '../../../core/mockupData';

interface TournamentFlowContainerProps {
  randomItems: GiftData[][];
}

const TournamentFlowContainer = ({ randomItems }: TournamentFlowContainerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSet = randomItems[currentIndex];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      <TournamentTitle />
      <TournamentCardWrapper>
        {currentSet.flat().map((item, index) => (
          <TournamentCard key={index} item={item} />
        ))}
      </TournamentCardWrapper>

      <TournamentFooter
        onNextClick={handleNextClick}
        disabled={currentIndex >= randomItems.length - 1}
      />
    </>
  );
};

export default TournamentFlowContainer;
