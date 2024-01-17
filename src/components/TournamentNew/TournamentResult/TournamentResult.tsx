import TournamentTitle from './TournamentTitle/TournamentTitle';
import TournamentResultCard from './TournamentResultCard/TournamentResultCard';
import TournamentResultUser from './TournamentResultUser/TournamentResultUser';
import TournamentResultFooter from './TournamentResultFooter/TournamentResultFooter';
import * as S from './TournamentResult.sytle';
import { GiftData } from '../../../core/mockupData';
import usePostScore from '../../../hooks/queries/tournament/usePostScore';
import useGetTournamentUser from '../../../hooks/queries/tournament/useGetTournamentUser';

interface TournamentResultProps {
  winners: GiftData | null;
  firstGiftId: number; // Replace with the actual type of giftId
  secondGiftId: number;
  finalGiftId: number;
}

const TournamentResult: React.FC<TournamentResultProps> = ({
  winners,
  firstGiftId,
  secondGiftId,
  finalGiftId,
}) => {
  const memberData = useGetTournamentUser({ roomId: 2 });
  const tournamentData = memberData?.data || [];
  console.log('뷰', memberData);
  console.log('2', tournamentData);
  const { mutation } = usePostScore({ body: { firstGiftId, secondGiftId, finalGiftId } });
  const footerClickHandler = () => {
    mutation.mutate({ firstGiftId, secondGiftId, finalGiftId });
  };

  return (
    <S.TournamentResult>
      <TournamentTitle />
      <TournamentResultCard item={winners} />
      <TournamentResultUser memberData={tournamentData} />
      <TournamentResultFooter onClick={footerClickHandler} />
    </S.TournamentResult>
  );
};

export default TournamentResult;
