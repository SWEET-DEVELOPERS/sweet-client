import TournamentStartText from './tournamentStartText/TournamentStartText';
import TournamentItemCount from './tournamentItemCount/TournamentItemCount';
import * as S from './TournamentContatiner.style';
import { Svg3Dicons } from '../../../assets/svg';
import TournamentStartButton from './tournamentStartButton/TournamentStartButton';
import { useState } from 'react';
import mockupData from '../../../core/mockupData';
import TournamentFlowContainer from '../TournamentFlow/TournamentFlowContainer';

interface GiftData {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
  url: string;
}

const TournamentContainer: React.FC = () => {
  const [showTournamentContainer, setShowTournamentContainer] = useState(true);
  const [randomItems, setRandomItems] = useState<GiftData[]>([]);

  // showTournamentContainer state가 false면 랜덤 아이템 추출해서 플로우에 보내주기?
  const handleStartClick = () => {
    // 랜덤으로 2개 아이템 선택
    const shuffledData = [...mockupData].sort(() => 0.5 - Math.random());
    const selectedItems = shuffledData.slice(0, 2);

    setRandomItems(selectedItems);
    console.log(selectedItems);//잘들어옴 스위치로 페이지 스텝 설정 
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

      {!showTournamentContainer && <TournamentFlowContainer randomItems={randomItems} />}
    </>
  );
};

export default TournamentContainer;
