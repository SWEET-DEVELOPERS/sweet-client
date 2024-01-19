import TournamentTitle from './TournamentTitle/TournamentTitle';
import TournamentResultCard from './TournamentResultCard/TournamentResultCard';
import TournamentResultUser from './TournamentResultUser/TournamentResultUser';
import TournamentResultFooter from './TournamentResultFooter/TournamentResultFooter';
import * as S from './TournamentResult.sytle';
import { GiftData } from '../../../core/mockupData';
import usePostScore from '../../../hooks/queries/tournament/usePostScore';
import useGetTournamentUser from '../../../hooks/queries/tournament/useGetTournamentUser';
import { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import TournamentTitleSub from './TournamentTitleSub/TournamnetTitleSub';

interface TournamentResultProps {
  winners: GiftData | null;
  firstGiftId: number;
  secondGiftId: number;
  finalGiftId: number;
  roomId: number;
}

const TournamentResult: React.FC<TournamentResultProps> = ({
  winners,
  firstGiftId,
  secondGiftId,
  finalGiftId,
  roomId,
}) => {
  const memberData = useGetTournamentUser({ roomId: roomId });
  const tournamentData = memberData?.data || [];

  //버튼 ture
  const [isButton, setIsButton] = useState(true);
  //modat state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutation } = usePostScore({ body: { firstGiftId, secondGiftId, finalGiftId } });

  const footerClickHandler = () => {
    setIsModalOpen(true);
    mutation.mutate({ firstGiftId, secondGiftId, finalGiftId });

    console.log('모달열림', isModalOpen);
  };

  const handleConfirmClick = () => {
    setIsModalOpen(false);
    setIsButton(false);
    console.log('모달닫힘', isModalOpen);
  };

  return (
    <S.TournamentResult>
      {isButton && <TournamentTitle />}
      {!isButton && <TournamentTitleSub />}
      <TournamentResultCard item={winners} />
      <TournamentResultUser memberData={tournamentData} />
      {isButton && <TournamentResultFooter onClick={footerClickHandler} />}
      {isModalOpen && (
        <Modal onConfirmClick={handleConfirmClick}>
          선물 토너먼트
          <br />
          결과가 제출되었어요!
        </Modal>
      )}
    </S.TournamentResult>
  );
};

export default TournamentResult;
