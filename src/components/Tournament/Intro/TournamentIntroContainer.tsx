import TournamentStartText from './TournamentStartText/TournamentStartText';
import TournamentItemCount from './TournamentItemCount/TournamentItemCount';
import * as S from './TournamentIntroContatiner.style';
import TournamentStartButton from './TournamentStartButton/TournamentStartButton';
import useTournament from '../../../hooks/tournament/useTournament';
import TournamentFlowContainer from '../TournamentFlow/TournamentFlowContainer';
import useGetItem from '../../../hooks/queries/tournament/useGetItem';
import trophy from '../../../assets/img/3dic_trophy3.png';
import { useParams } from 'react-router';
import Header from '../../common/Header';

const TournamentIntroContainer = () => {
  const params = useParams();
  const giftee = params.giftee;
  console.log('울랄라', giftee);
  const roomIdString = params.roomId || '';
  const roomId = parseInt(roomIdString || '', 10);
  console.log('추출된 초대 코드', roomId);

  const { showTournamentContainer, handleStartClick } = useTournament();
  const memberData = useGetItem({ roomId: Number(roomId) });
  console.log(memberData);

  const tournamentData = memberData?.data || [];
  return (
    <>
      {showTournamentContainer ? (
        <>
          <Header />
          <S.TournamentFlowWrapper>
            <TournamentStartText giftee={giftee} />
            <TournamentItemCount memberData={tournamentData} />
            <S.TournamentImg>
              <img src={trophy} alt='트로피' />
            </S.TournamentImg>
            <TournamentStartButton onClick={handleStartClick} />
          </S.TournamentFlowWrapper>
        </>
      ) : memberData ? (
        <>
          <Header />

          <TournamentFlowContainer memberData={tournamentData} roomId={roomId} />
        </>
      ) : (
        <TournamentFlowContainer memberData={tournamentData} roomId={roomId} />
      )}
    </>
  );
};

export default TournamentIntroContainer;
