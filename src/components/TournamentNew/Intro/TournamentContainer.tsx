import TournamentStartText from './TournamentStartText/TournamentStartText';
import TournamentItemCount from './TournamentItemCount/TournamentItemCount';
import * as S from './TournamentContatiner.style';
import TournamentStartButton from './TournamentStartButton/TournamentStartButton';
import useTournament from '../../../hooks/tournament/useTournament';
import TournamentFlowContainer from '../TournamentFlow/TournamentFlowContainer';
import useGetItem from '../../../hooks/queries/tournament/useGetItem';
import trophy from '../../../assets/img/3dic_trophy3.png';
import { useParams } from 'react-router';
import Header from '../../common/Header';
import { TrophyNone } from '../../../assets/svg';
import TournamentNoneText from './TournamentNoneText/TournamentNoneText';

const TournamentContainer = () => {
  const params = useParams();

  const roomIdString = params.roomId || '';
  const roomId = parseInt(roomIdString || '', 10);
  console.log('추출된 초대 코드', roomId);

  const { showTournamentContainer, handleStartClick } = useTournament();
  const memberData = useGetItem({ roomId: roomId });
  console.log(memberData);

  const tournamentData = memberData?.data || [];
  return (
    <>
      {showTournamentContainer ? (
        <>
          <Header />
          <S.TournamentFlowWrapper>
            <TournamentStartText />
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
          <TournamentFlowContainer memberData={tournamentData} />
        </>
      ) : (
        <>
          <Header />
          <S.TournamentFlowWrapper>
            <TournamentNoneText />
            <S.TournamentImg>
              <TrophyNone />
            </S.TournamentImg>
          </S.TournamentFlowWrapper>
        </>
      )}
    </>
  );
};

export default TournamentContainer;
