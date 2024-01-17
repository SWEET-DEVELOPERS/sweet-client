import TournamentRankingCard from './TournamentRankingCard/TournamentRankingCard';
import TournamentRankingTitle from './TournamentRankingTitle/TournamentRankingTitle';
import { RankingWrapper } from './TournamentRanking.style';
import { IcMedal1, IcMedal2, IcMedal3, IcMedal4 } from '../../../assets/svg';
import styled from 'styled-components';
import useGetRanking from '../../../hooks/queries/tournament/useGetRanking';

const TournamentRanking = () => {
  const rankingData = useGetRanking({ roomId: 2 });
  const tournamentRankingData = rankingData?.data || [];

  return (
    <>
      <TournamentRankingTitle />
      <RankingWrapper>
        <Wrapper>
          {tournamentRankingData.map((data, index) => (
            <WrapperItem key={index}>
              {data.ranking === 1 && <IcMedal1 style={{ width: '2.5rem' }} />}
              {data.ranking === 2 && <IcMedal2 style={{ width: '2.5rem' }} />}
              {data.ranking === 3 && <IcMedal3 style={{ width: '2.5rem' }} />}
              {data.ranking !== 1 && data.ranking !== 2 && data.ranking !== 3 && (
                <IcMedal4 style={{ width: '2.5rem' }} />
              )}
              <TournamentRankingCard name={data.name} cost={data.cost} imageUrl={data.imageUrl} />
            </WrapperItem>
          ))}
        </Wrapper>
      </RankingWrapper>
    </>
  );
};

export default TournamentRanking;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`;

const WrapperItem = styled.div`
  display: flex;
  gap: 2.4rem;
`;
