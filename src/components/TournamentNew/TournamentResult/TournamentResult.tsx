import TournamentTitle from './TournamentTitle/TournamentTitle';
import TournamentResultCard from './TournamentResultCard/TournamentResultCard';
import TournamentResultUser from './TournamentResultUser/TournamentResultUser';
import TournamentResultFooter from './TournamentResultFooter/TournamentResultFooter';
import * as S from './TournamentResult.sytle';
import { GiftData } from '../../../core/mockupData';
import usePostScore from '../../../hooks/queries/tournament/usePostScore';

interface TournamentResultProps {
  winners: GiftData | null;
  firstPlaceGiftId: number; // Replace with the actual type of giftId
  secondPlaceGiftId: number;
}

const TournamentResult: React.FC<TournamentResultProps> = ({
  winners,
  firstPlaceGiftId, //1
  secondPlaceGiftId, //2
}) => {
  console.log(firstPlaceGiftId);
  console.log(secondPlaceGiftId);
  // const footerClickHandler = () => {
  //   const itemInfo: TournamentScore = {
  //     firstPlaceGiftId: firstPlaceGiftId,
  //     secondPlaceGiftId: secondPlaceGiftId,
  //   };

  //   const { mutation } = usePostScore({ body: itemInfo });
  //   mutation.mutate(itemInfo);
  // };
  // const footerClickHandler = () => {};
  const { mutation } = usePostScore({ body: { firstPlaceGiftId, secondPlaceGiftId } });

  const footerClickHandler = () => {
    mutation.mutate({ firstPlaceGiftId, secondPlaceGiftId });
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
