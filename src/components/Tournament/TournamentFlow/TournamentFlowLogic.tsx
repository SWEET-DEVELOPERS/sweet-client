import { useState, useEffect } from 'react';
import { GiftData } from '../../../types/tournament';
import useRandomItems from '../../../hooks/tournament/useRandomItems';

interface TournamentLogicProps {
  memberData: GiftData[];
}

export const useTournamentFlowLogic = ({ memberData }: TournamentLogicProps) => {
  const [itemPick, setItemPick] = useState<GiftData[]>([]);
  const [displays, setDisplays] = useState<GiftData[]>([]);
  const [selectedItem, setSelectedItem] = useState<GiftData | null>(null);
  const [firstItems, setFirstItems] = useState<GiftData[]>([]);
  const [secondItems, setSecondItems] = useState<GiftData[]>([]);
  const [winners, setWinners] = useState<GiftData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [roundIndex, setRoundIndex] = useState<number>(1);
  const [showTournamentResult, setShowTournamentResult] = useState(false);
  const [isSelected, setSelected] = useState<GiftData | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [isClickSelect, setClickSelect] = useState<GiftData[]>([]);

  const randomItems = useRandomItems(memberData);

  useEffect(() => {
    setItemPick(randomItems);
    setDisplays([randomItems[0], randomItems[1]]);
  }, [randomItems]);

  const clickSelect = (item: GiftData) => () => {
    setClickSelect([item]);
    setSelected(item);
    setDisabled(true);
  };

  const clickHandler = (item: GiftData) => () => {
    if (itemPick.length <= 2) {
      if (winners.length === 0) {
        setDisplays([item]);
        setSelectedItem(item);
        setFirstItems([itemPick[0]]);
        setSecondItems([itemPick[1]]);
        setShowTournamentResult(true);
      } else {
        let updatedItems = [...winners, item];
        setItemPick([...updatedItems]);
        setDisplays([updatedItems[0], updatedItems[1]]);
        setWinners([]);
        setCurrentIndex(1);
        setRoundIndex(roundIndex + 1);
      }
    } else if (itemPick.length > 2) {
      setWinners([...winners, item]);
      if (itemPick[3]) {
        setDisplays([itemPick[2], itemPick[3]]);
        setItemPick([...itemPick.slice(2)]);
      } else {
        let updatedItems = [...winners, item, itemPick[2]];
        setItemPick([...updatedItems]);
        setDisplays([updatedItems[0], updatedItems[1]]);
        setRoundIndex(roundIndex + 1);
        setCurrentIndex(0);
      }
      setCurrentIndex(currentIndex + 1);
    }
    setSelected(null);
    setDisabled(false);
  };

  const refresh = (): void => {
    const shuffledArray = [...itemPick].sort(() => Math.random() - 0.5);
    setItemPick(shuffledArray);
    setDisplays([shuffledArray[0], shuffledArray[1]]);
    setDisabled(false);
  };

  return {
    itemPick,
    displays,
    selectedItem,
    firstItems,
    secondItems,
    winners,
    currentIndex,
    roundIndex,
    showTournamentResult,
    isSelected,
    disabled,
    isClickSelect,
    clickSelect,
    clickHandler,
    refresh,
  };
};
