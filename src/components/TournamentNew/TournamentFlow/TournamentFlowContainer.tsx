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
  //전체 아이템 memberData {1,2,3,4,5,6,7,8,9,10} -> useEffect로 랜덤으로 섞어줌
  const [itemPick, setitemPick] = useState<GiftData[]>([]);
  // 보여질 아이템
  const [displays, setDisplays] = useState<GiftData[]>([]);
  //선택된 아이템 저장
  const [selectedItem, setSelectedItem] = useState<GiftData | null>(null);
  //post 요청을 위한 state
  const [firstItems, setFirstItems] = useState<GiftData[]>([]);
  const [secondItems, setSecondItems] = useState<GiftData[]>([]);
  // 결승을 위한 state
  const [winners, setWinners] = useState<GiftData[]>([]);
  // 최신 인덱스 & 라운드 인덱스 값
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [roundIndex, setRoundIndex] = useState<number>(1);
  // 토너먼트 결과화면으로 넘어가게 해주는
  const [showTournamentResult, setShowTournamentResult] = useState(false);

  //전체 아이템 memberData 랜덤 섞어주기
  useEffect(() => {
    // memberData.sort(() => Math.random() - 0.5);
    setitemPick([...memberData]);
    setDisplays([memberData[0], memberData[1]]);
  }, [memberData]);

  //토너먼트 라운딩 로직 함수
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
        setitemPick([...itemPick.slice(2)]);
      } else {
        let updateditem = [...winners, item, itemPick[2]];

        setitemPick([...updateditem]);
        setDisplays([updateditem[0], updateditem[1]]);
        setRoundIndex((roundIndex) => roundIndex + 1);
        setCurrentIndex(0);
        console.log('부전승!');
        setWinners([]);
      }

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
