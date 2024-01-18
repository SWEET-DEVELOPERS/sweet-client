import TournamentStartText from './TournamentStartText/TournamentStartText';
import TournamentItemCount from './TournamentItemCount/TournamentItemCount';
import * as S from './TournamentContatiner.style';
import TournamentStartButton from './TournamentStartButton/TournamentStartButton';
import useTournament from '../../../hooks/tournament/useTournament';
import TournamentFlowContainer from '../TournamentFlow/TournamentFlowContainer';
import useGetItem from '../../../hooks/queries/tournament/useGetItem';
import trophy from '../../../assets/img/3dic_trophy3.png';
//import { useLocation } from 'react-router';

const TournamentContainer = () => {
  const { showTournamentContainer, handleStartClick } = useTournament();
  const memberData = useGetItem({ roomId: 2 });
  console.log(memberData);
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);

  // const roomIdString = searchParams.get('roomId');
  // const roomId = parseInt(roomIdString || '', 10);
  // console.log('추출된 초대 코드', roomId);
  //const roomMemberWholeData = useGetRoomMember(roomId)?.data;
  // 여기다가 query api 불러오기
  //console.log(roomMemberWholeData);

  // Use an empty array as a fallback if memberData is undefined
  const tournamentData = memberData?.data || [];
  return (
    <>
      {showTournamentContainer ? (
        <>
          <TournamentStartText />
          <TournamentItemCount />
          <S.TournamentImg>
            <img src={trophy} alt='트로피' />
          </S.TournamentImg>
          <TournamentStartButton onClick={handleStartClick} />
        </>
      ) : (
        <TournamentFlowContainer memberData={tournamentData} />
      )}
    </>
  );
};

export default TournamentContainer;
