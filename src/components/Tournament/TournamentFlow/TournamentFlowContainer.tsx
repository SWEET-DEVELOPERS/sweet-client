import * as S from './TournamentFlowContainer.style';
import TournamentCard from './TournamentCard/TournamentCard';
import TournamentTitle from './TournamentTitle/TournamentTitle';
import TournamentFooter from './TournamentFooter/TournamentFooter';
import TournamentResult from '../TournamentResult/TournamentResult';
import { GiftData } from '../../../types/tournament';
import { useTournamentFlowLogic } from './TournamentFlowLogic';

interface TournamentUIProps {
  memberData: GiftData[];
  roomId: number;
}

const TournamentFlowContainer = ({ memberData, roomId }: TournamentUIProps) => {
  const {
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
  } = useTournamentFlowLogic({ memberData });

  return (
    <>
      {showTournamentResult ? (
        <TournamentResult
          roomId={roomId}
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
            totalRounds={Math.floor(memberData.length / 2)}
            onClick={refresh}
          />
          <S.TournamentCardWrapper>
            {displays.map((displayitem) => (
              <TournamentCard
                key={displayitem.name}
                item={displayitem}
                onClick={clickSelect(displayitem)}
                selected={isSelected === displayitem}
              />
            ))}
          </S.TournamentCardWrapper>
          <TournamentFooter onNextClick={clickHandler(isClickSelect[0])} disabled={disabled} />
        </S.TournamentFlowContainerWrapper>
      )}
    </>
  );
};

export default TournamentFlowContainer;
