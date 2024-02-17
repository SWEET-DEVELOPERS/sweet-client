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
import Header from '../../common/Header';
import TournamentNoneText from './TournamentNoneText/TournamentNoneText';
import { TournamentResult } from '../TournamentResult/TournamentResult.sytle';
import { GiftData } from '../../../types/tournament';
import TournamentDeleteButton from './TournamentDeleteButton/TournamentDeleteButton';

const TournamentIntroContainer = () => {
  const params = useParams();
  const giftee = params.giftee;

  const roomIdString = params.roomId || '';
  const roomId = parseInt(roomIdString || '', 10);

  const { showTournamentContainer, handleStartClick } = useTournament();
  const memberData = useGetItem({ roomId: Number(roomId) });
  console.log(memberData);

  let tournamentData: GiftData[] = [];

  if (typeof memberData === 'string') {
    console.log('Error :', memberData);
    return <TournamentResult />;
  } else if (memberData && memberData.data) {
    tournamentData = memberData.data;
    console.log(tournamentData);
  }

  return (
    <>
      {showTournamentContainer ? (
        <>
          <Header />
          <S.TournamentFlowWrapper>
            {tournamentData.length === undefined ? (
              <>
                {memberData.data.isOwner ? (
                  <>
                    <TournamentNoneText />
                    <S.TournamentImg>
                      <TrophyNone />
                    </S.TournamentImg>
                    <TournamentDeleteButton onClick={handleStartClick} />
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
          <Header />
          <TournamentFlowContainer memberData={tournamentData} roomId={roomId} />
        </>
      )}
    </>
  );
};

export default TournamentIntroContainer;
