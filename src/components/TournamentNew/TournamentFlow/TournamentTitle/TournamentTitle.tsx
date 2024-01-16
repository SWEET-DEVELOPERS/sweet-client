import { IcRefreshGray } from '../../../../assets/svg';
import * as S from './TournamernTitle.style';

interface TournamentTitleProps {
  rounds: number;
  currentIndex: number;
  totalRounds: number;
}

const TournamentTitle = ({ rounds, currentIndex, totalRounds }: TournamentTitleProps) => {
  const round = currentIndex; // Adjust the index to start from 1
  return (
    <>
      {/* 라운드 컴포넌트 */}
      <S.Title>Round {rounds}</S.Title>
      <S.SetCount>
        {round}/{totalRounds}
      </S.SetCount>
      {/* 세트 수 현재 상황 */}
      <S.RefreshWrapper>
        <IcRefreshGray />
      </S.RefreshWrapper>
    </>
  );
};

export default TournamentTitle;
