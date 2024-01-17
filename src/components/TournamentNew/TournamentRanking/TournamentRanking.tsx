import TournamentRankingCard from './TournamentRankingCard/TournamentRankingCard';
import TournamentRankingTitle from './TournamentRankingTitle/TournamentRankingTitle';
import { RankingWrapper } from './TournamentRanking.style';
import { IcMedal1, IcMedal2, IcMedal3, IcMedal4 } from '../../../assets/svg';
import styled from 'styled-components';
import useGetRanking from '../../../hooks/queries/tournament/useGetRanking';
import saveAs from 'file-saver';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

const TournamentRanking = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const rankingData = useGetRanking({ roomId: 2 });
  const tournamentRankingData = rankingData?.data || [];
  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <TournamentRankingWrapper ref={divRef}>
      <TournamentRankingTitle onClick={handleDownload} />
      <RankingWrapper>
        <Wrapper>
          {tournamentRankingData.map((data, index) => {
            // Split the URL using the "?" character
            const imageUrlParts = data.imageUrl.split('?');
            const imageUrlWithoutParams = imageUrlParts[0];
            console.log(imageUrlWithoutParams);
            return (
              <WrapperItem key={index}>
                {data.ranking === 1 && <IcMedal1 style={{ width: '2.5rem' }} />}
                {data.ranking === 2 && <IcMedal2 style={{ width: '2.5rem' }} />}
                {data.ranking === 3 && <IcMedal3 style={{ width: '2.5rem' }} />}
                {data.ranking !== 1 && data.ranking !== 2 && data.ranking !== 3 && (
                  <IconWrapper>
                    <IcMedal4 style={{ width: '2.5rem' }} />
                    <IcTitle>{data.ranking}</IcTitle>
                  </IconWrapper>
                )}
                <TournamentRankingCard
                  name={data.name}
                  cost={data.cost}
                  imageUrl={imageUrlWithoutParams}
                />
              </WrapperItem>
            );
          })}
        </Wrapper>
      </RankingWrapper>
    </TournamentRankingWrapper>
  );
};

export default TournamentRanking;
const TournamentRankingWrapper = styled.div``;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`;

const IcTitle = styled.p`
  text-align: center;
  position: absolute;
  font-family: 'SUIT';
  color: #ffffff;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  left: 50%;
  font-weight: 700;
  top: 9%;
  transform: translateX(-50%);
`;

const IconWrapper = styled.div`
  position: relative;
  top: 30%;
`;

const WrapperItem = styled.div`
  display: flex;
  gap: 2.4rem;
`;
