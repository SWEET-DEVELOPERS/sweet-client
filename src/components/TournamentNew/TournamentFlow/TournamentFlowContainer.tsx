import { useState, useEffect } from 'react';
import * as S from './TournamentFlowContainer.style';
import TournamentCard from './TournamentCard/TournamentCard';
import TournamentTitle from './TournamentTitle/TournamentTitle';
import TournamentFooter from './TournamentFooter/TournamentFooter';
import TournamentResult from '../TournamentResult/TournamentResult';
import { GiftData } from '../../../types/tournament';

interface TournamentProps {
  memberData: GiftData[];
}

const TournamentFlowContainer = ({ memberData }: TournamentProps) => {
  const [itemPick, setitemPick] = useState<GiftData[]>([]);
  const [displays, setDisplays] = useState<GiftData[]>([]);
  //선택된 아이템 저장
  const [selectedItem, setSelectedItem] = useState<GiftData | null>(null);
  const [remainingItems, setRemainingItems] = useState<GiftData[]>([]);
  const [firstItems, setFirstItems] = useState<GiftData[]>([]);
  const [secondItems, setSecondItems] = useState<GiftData[]>([]);

  const [winners, setWinners] = useState<GiftData[]>([]);
  // 최신 인덱스
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [roundIndex, setRoundIndex] = useState<number>(1);

  useEffect(() => {
    // Use memberData instead of items from local data
    memberData.sort(() => Math.random() - 0.5);
    setitemPick([...memberData]);
    setDisplays([memberData[0], memberData[1]]);
  }, [memberData]);
  //
  const [showTournamentResult, setShowTournamentResult] = useState(false);

  const clickHandler = (item: GiftData) => () => {
    if (itemPick.length <= 2) {
      if (winners.length === 0) {
        //위너가 1이 되니까 ,, 요기에 못들어가네
        setDisplays([item]);
        setSelectedItem(item);
        console.log('결과?=:', itemPick); //결승 두개 아이템
        setFirstItems([itemPick[0]]);
        setSecondItems([itemPick[1]]);
        console.log('결과!=:', [item]); //우승한 한개 아이템
        setShowTournamentResult(true);
      } else {
        let updateditem = [...winners, item];
        setitemPick([...updateditem]);
        setDisplays([updateditem[0], updateditem[1]]);
        setWinners([]);
        setCurrentIndex(1);
        setRoundIndex((roundIndex) => roundIndex + 1);
        console.log('라운드', updateditem);
      }
    } else if (itemPick.length > 2) {
      setWinners([...winners, item]);
      if (itemPick[3]) {
        setDisplays([itemPick[2], itemPick[3]]);
        console.log('그냥!');
      } else if (winners.length === 0) {
        //위너가 1이 되니까 ,, 요기에 못들어가네
        setDisplays([item]);
        //아 이걸 ..?이거 때문에 12개로 토너먼트하면 미리 결승이 일어나는건가?
        setSelectedItem(item);
        console.log('결과?!!=:', itemPick); //결승 두개 아이템
        // Filter out the selected item from itemPick
        setFirstItems([itemPick[0]]);
        setSecondItems([itemPick[1]]);
        const updatedRemainingItems = itemPick.filter((remainingItem) => remainingItem !== item);
        setRemainingItems(updatedRemainingItems);

        console.log('우승템', [item]); //우승한 한개 아이템
        setShowTournamentResult(true);
      } else {
        let updateditem = [...winners, itemPick[2]];
        setitemPick([...updateditem]);
        setDisplays([updateditem[0], updateditem[1]]);
        setRoundIndex((roundIndex) => roundIndex + 1);
        setCurrentIndex(1);
        console.log('부전승!');
      }

      setitemPick([...itemPick.slice(2)]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log('변햇다!');
    }
  };

  console.log('???', itemPick);
  console.log('dma??', firstItems);
  console.log('dma?????', secondItems);

  const footerClickHandler = () => {};
  return (
    <>
      {showTournamentResult ? (
        <TournamentResult
          winners={selectedItem}
          firstGiftId={firstItems.length > 0 ? firstItems[0].giftId : 0}
          secondGiftId={secondItems.length > 0 ? secondItems[0].giftId : 0}
          finalGiftId={selectedItem?.giftId || 0}
        />
      ) : (
        <S.TournamentFlowContainerWrapper>
          <TournamentTitle
            rounds={roundIndex}
            currentIndex={currentIndex}
            totalRounds={memberData.length}
          />
          <S.TournamentCardWrapper>
            {displays.map((d) => (
              <TournamentCard key={d.name} item={d} onClick={clickHandler(d)} selected={true} />
            ))}
          </S.TournamentCardWrapper>
          <TournamentFooter onNextClick={footerClickHandler} disabled={false} />
        </S.TournamentFlowContainerWrapper>
      )}
    </>
  );
};

export default TournamentFlowContainer;
