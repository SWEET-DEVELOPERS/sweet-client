import TournamentRankingCard from './TournamentRankingCard/TournamentRankingCard';
import TournamentRankingTitle from './TournamentRankingTitle/TournamentRankingTitle';
import { RankingWrapper } from './TournamentRanking.style';
import { IcMedal1, IcMedal2, IcMedal3, IcMedal4 } from '../../../assets/svg';
import useGetRanking from '../../../hooks/queries/tournament/useGetRanking';
import * as S from './TournamentRanking.style';
import Header from '../../common/Header';

interface TournamentRankingProps {
  roomId: number;
  giftee?: string;
}

const TournamentRanking = () => {
  const rankingData = useGetRanking({ roomId: 2 });
  const tournamentRankingData = rankingData?.data || [];

  return (
    <S.TournamentRankingWrapper>
      <Header />
      <TournamentRankingTitle giftee={'멋진 시동훈'} />
      <RankingWrapper>
        <S.Wrapper>
          {tournamentRankingData.map((data, index) => {
            const imageUrlParts = data.imageUrl.split('?');
            const imageUrlWithoutParams = imageUrlParts[0];
            console.log(imageUrlWithoutParams);
            return (
              <S.WrapperItem key={index}>
                {data.ranking === 1 && <IcMedal1 style={{ width: '2.5rem' }} />}
                {data.ranking === 2 && <IcMedal2 style={{ width: '2.5rem' }} />}
                {data.ranking === 3 && <IcMedal3 style={{ width: '2.5rem' }} />}
                {data.ranking !== 1 && data.ranking !== 2 && data.ranking !== 3 && (
                  <S.IconWrapper>
                    <IcMedal4 style={{ width: '2.5rem' }} />
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
          })}
        </S.Wrapper>
      </RankingWrapper>
    </S.TournamentRankingWrapper>
  );
};

export default TournamentRanking;
