import TournamentStartText from './TournamentStartText/TournamentStartText';
import TournamentItemCount from './TournamentItemCount/TournamentItemCount';
import * as S from './TournamentIntroContatiner.style';
import TournamentStartButton from './TournamentStartButton/TournamentStartButton';
import useTournament from '../../../hooks/tournament/useTournament';
import TournamentFlowContainer from '../TournamentFlow/TournamentFlowContainer';
import useGetItem from '../../../hooks/queries/tournament/useGetItem';
import trophy from '../../../assets/img/3dic_trophy3.png';
import { TrophyNone } from '../../../assets/svg';
import { useParams } from 'react-router';
import TournamentNoneText from './TournamentNoneText/TournamentNoneText';
import { GiftData } from '../../../types/tournament';
import TournamentDeleteButton from './TournamentDeleteButton/TournamentDeleteButton';
import { useNavigate } from 'react-router-dom';
import Modal from '../../common/Modal/Modal';
import useDeleteRoom from '../../../hooks/queries/tournament/useDeleteRoom';

const TournamentIntroContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const giftee = params.giftee;
  const roomIdString = params.roomId || '';
  const roomId = parseInt(roomIdString || '', 10);
  const memberData = useGetItem({ roomId: Number(roomId) });
  let tournamentData: GiftData[] = [];

  const { mutation } = useDeleteRoom(roomId);

  const { showTournamentContainer, handleStartClick } = useTournament();
  const handleClearRoom = () => {};

  if (typeof memberData === 'string') {
    console.log('Error :', memberData);
    return (
      <Modal onConfirmClick={handleClearRoom}>
        선물 토너먼트를
        <br />
        이미 참여하셨습니다!
      </Modal>
    );
  } else if (memberData && memberData.data) {
    tournamentData = memberData.data;
    console.log(tournamentData);
  }

  console.log('룸디는 : ' + roomId);
  const handleClickConfirmDeleteBtn = (roomId?: number) => {
    if (roomId !== undefined) {
      mutation.mutate(roomId);
      navigate(`/mypage`);
    }
  };

  return (
    <>
      {showTournamentContainer ? (
        <>
          <S.TournamentFlowWrapper>
            {tournamentData.length === undefined ? (
              <>
                {memberData.data.isOwner ? (
                  <>
                    <TournamentNoneText />
                    <S.TournamentImg>
                      <TrophyNone />
                    </S.TournamentImg>
                    <TournamentDeleteButton onClick={handleClickConfirmDeleteBtn} />
                  </>
                ) : (
                  <>
                    <TournamentNoneText />
                    <S.TournamentImg>
                      <TrophyNone />
                    </S.TournamentImg>
                  </>
                )}
              </>
            ) : (
              <>
                <TournamentStartText giftee={giftee} />
                <TournamentItemCount memberData={tournamentData} />
                <S.TournamentImg>
                  <img src={trophy} alt='트로피' />
                </S.TournamentImg>
                <TournamentStartButton onClick={handleStartClick} />
              </>
            )}
          </S.TournamentFlowWrapper>
        </>
      ) : (
        <>
          <TournamentFlowContainer memberData={tournamentData} roomId={roomId} />
        </>
      )}
    </>
  );
};

export default TournamentIntroContainer;
