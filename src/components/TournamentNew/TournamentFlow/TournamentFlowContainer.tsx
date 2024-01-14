import { useState } from 'react';
import TournamentCard from './TournamentCard/TournamentCard';
import TournamentFooter from './TournamentFooter/TournamentFooter';
import TournamentTitle from './TournamentTitle/TournamentTitle';
import { GiftData } from '../../../core/mockupData';
import { TournamentCardWrapper } from './TournamentFlowContainer.style';

interface TournamentFlowContainerProps {
  randomItems: GiftData[][];
}

const TournamentFlowContainer = ({ randomItems }: TournamentFlowContainerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState<GiftData[]>([]);

  const currentSet = randomItems[currentIndex];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setSelectedItems([]);
  };

  const handleCardClick = (index: number) => {
    setSelectedItems((prevItems) => {
      const foundItem = prevItems.find((item) => item.giftId === currentSet[index].giftId);
      if (foundItem) {
        return prevItems.filter((item) => item.giftId !== foundItem.giftId);
      } else {
        return [...prevItems, currentSet[index]];
      }
    });
  };

  console.log(selectedItems);//이게 선택한 아이템 하나
  console.log(currentSet);//렌더링 되는 두개의 아이템
  return (
    <>
      <TournamentTitle />
      <TournamentCardWrapper>
        {currentSet.flat().map((item, index) => (
          <TournamentCard
            key={index}
            item={item}
            onClick={() => handleCardClick(index)}
            selected={selectedItems.includes(item)}
          />
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
