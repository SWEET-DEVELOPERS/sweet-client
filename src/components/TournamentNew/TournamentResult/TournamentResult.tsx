import TournamentTitle from './TournamentTitle/TournamentTitle';
import TournamentResultCard from './TournamentResultCard/TournamentResultCard';
import TournamentResultUser from './TournamentResultUser/TournamentResultUser';
import TournamentResultFooter from './TournamentResultFooter/TournamentResultFooter';
import * as S from './TournamentResult.sytle';
import { GiftData } from '../../../core/mockupData';
import usePostScore from '../../../hooks/queries/tournament/usePostScore';

interface TournamentResultProps {
  winners: GiftData | null;
  firstGiftId: number; // Replace with the actual type of giftId
  secondGiftId: number;
  finalGiftId: number;
}

const TournamentResult: React.FC<TournamentResultProps> = ({
  winners,
  firstGiftId, //1
  secondGiftId, //2
  finalGiftId,
}) => {
  console.log(firstGiftId);
  console.log(secondGiftId);
  console.log(finalGiftId);
  // const footerClickHandler = () => {
  //   const itemInfo: TournamentScore = {
  //     firstPlaceGiftId: firstPlaceGiftId,
  //     secondPlaceGiftId: secondPlaceGiftId,
  //   };

  //   const { mutation } = usePostScore({ body: itemInfo });
  //   mutation.mutate(itemInfo);
  // };
  // const footerClickHandler = () => {};
  const { mutation } = usePostScore({ body: { firstGiftId, secondGiftId, finalGiftId } });

  const footerClickHandler = () => {
    mutation.mutate({ firstGiftId, secondGiftId, finalGiftId });
  };

  return (
    <S.TournamentResult>
      <TournamentTitle />
      <TournamentResultCard item={winners} />
      <TournamentResultUser />
      <TournamentResultFooter onClick={footerClickHandler} />
    </S.TournamentResult>
  );
};

export default TournamentResult;
