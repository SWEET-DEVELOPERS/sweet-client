import { useState, useEffect } from 'react';
import * as S from './TournamentFlowContainer.style';
import TournamentCard from './TournamentCard/TournamentCard';
import TournamentTitle from './TournamentTitle/TournamentTitle';
import TournamentFooter from './TournamentFooter/TournamentFooter';
import TournamentResult from '../TournamentResult/TournamentResult';

interface GiftData {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
  url: string;
}

const TournamentFlowContainer: React.FC = () => {
  const items: GiftData[] = [
    {
      giftId: 1,
      imageUrl: '../assets/img/img.png',
      name: 'Gift 1',
      cost: 20,
      url: 'https://example.com',
    },
    {
      giftId: 2,
      imageUrl: '../assets/img/img.png',
      name: 'Gift 2',
      cost: 30,
      url: 'https://example.com',
    },
    {
      giftId: 3,
      imageUrl: '../assets/img/img.png',
      name: 'Gift 3',
      cost: 22,
      url: 'https://example.com',
    },
    {
      giftId: 4,
      imageUrl: '../assets/img/img.png',
      name: 'Gift 4',
      cost: 22,
      url: 'https://example.com',
    },
    {
      giftId: 5,
      imageUrl: '../assets/img/img.png',
      name: 'Gift 5',
      cost: 22,
      url: 'https://example.com',
    },
    {
      giftId: 6,
      imageUrl: '../assets/img/img.png',
      name: 'Gift 6',
      cost: 22,
      url: 'https://example.com',
    },
    {
      giftId: 7,
      imageUrl: '../assets/img/img.png',
      name: 'Gift 7',
      cost: 22,
      url: 'https://example.com',
    },
    {
      giftId: 8,
      imageUrl: '../assets/img/img.png',
      name: 'Gift 8',
      cost: 22,
      url: 'https://example.com',
    },
  ];

  const [itemPick, setitemPick] = useState<GiftData[]>([]);
  const [displays, setDisplays] = useState<GiftData[]>([]);
  //선택된 아이템 저장
  const [selectedItem, setSelectedItem] = useState<GiftData | null>(null);

  const [winners, setWinners] = useState<GiftData[]>([]);
  // 최신 인덱스
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [roundIndex, setRoundIndex] = useState<number>(1);

  useEffect(() => {
    // 초기 아이템 섞기
    items.sort(() => Math.random() - 0.5);
    setitemPick([...items]);
    //첫번째와 두번째를 보여준다.
    setDisplays([items[0], items[1]]);
  }, []);
  //
  const [showTournamentResult, setShowTournamentResult] = useState(false);

  const clickHandler = (item: GiftData) => () => {
    if (itemPick.length <= 2) {
      if (winners.length === 0) {
        setDisplays([item]);
        setSelectedItem(item);
        console.log('결과?=:', itemPick); //결승 두개 아이템
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
      setDisplays([itemPick[2], itemPick[3]]);
      setitemPick([...itemPick.slice(2)]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log('변햇다!');
    }
  };

  console.log(selectedItem);
  const footerClickHandler = () => {};

  return (
    <>
      {showTournamentResult ? (
        <TournamentResult winners={selectedItem} />
      ) : (
        <S.TournamentFlowContainerWrapper>
          <TournamentTitle
            rounds={roundIndex}
            currentIndex={currentIndex}
            totalRounds={items.length}
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
