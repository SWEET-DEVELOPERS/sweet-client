import TournamentRankingCard from './TournamentRankingCard/TournamentRankingCard';
import TournamentRankingTitle from './TournamentRankingTitle/TournamentRankingTitle';
import { RankingWrapper } from './TournamentRanking.style';
import { Ranking1, Ranking2, Ranking3, Ranking04 } from '../../../assets/svg';
import useGetRanking from '../../../hooks/queries/tournament/useGetRanking';
import * as S from './TournamentRanking.style';

interface TournamentRankingProps {
  roomId: number;
  giftee?: string;
}

const TournamentRanking = ({ roomId, giftee }: TournamentRankingProps) => {
  const rankingData = useGetRanking({ roomId: roomId });
  const tournamentRankingData = rankingData?.data.data || [];

  return (
    <S.TournamentRankingWrapper>
      <TournamentRankingTitle roomId={roomId} giftee={giftee} />
      <RankingWrapper>
        <S.Wrapper>
          {Array.isArray(tournamentRankingData) && tournamentRankingData.length > 0 ? (
            tournamentRankingData.map((data, index) => {
              const imageUrlParts = data.imageUrl.split('?');
              const imageUrlWithoutParams = imageUrlParts[0];
              console.log(imageUrlWithoutParams);
              return (
                <S.WrapperItem key={index}>
                  {data.ranking === 1 && <Ranking1 style={{ width: '3.4rem' }} />}
                  {data.ranking === 2 && <Ranking2 style={{ width: '3.4rem' }} />}
                  {data.ranking === 3 && <Ranking3 style={{ width: '3.4rem' }} />}
                  {data.ranking !== 1 && data.ranking !== 2 && data.ranking !== 3 && (
                    <S.IconWrapper>
                      <Ranking04 style={{ width: '3.4rem' }} />
                      <S.IcTitle>{data.ranking}</S.IcTitle>
                    </S.IconWrapper>
                  )}
                  <TournamentRankingCard
                    name={data.name}
                    cost={data.cost}
                    imageUrl={imageUrlWithoutParams}
                  />
                </S.WrapperItem>
              );
            })
          ) : (
            <p>등록된 선물이 없어요!</p>
          )}
        </S.Wrapper>
      </RankingWrapper>
    </S.TournamentRankingWrapper>
  );
};

export default TournamentRanking;
