import * as S from './TournamentRankingTitle.style';
import { SubTitle } from '../../Intro/TournamentStartText/TournamentStartText.style';
import RankingImg from '../../../../assets/img/3dic_podium2.png';
import { useLocation } from 'react-router-dom';
import useClipboard from '../../../../hooks/useCopyClip';
import { useEffect } from 'react';
import { shareKakao } from '../../../../utils/shareKakaoLink';

interface TournamentRankingGifteeProps {
  giftee: string;
}

const TournamentRankingTitle = ({ giftee }: TournamentRankingGifteeProps) => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  const location = useLocation();
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  const { handleCopyToClipboard } = useClipboard();

  return (
    <section>
      <S.TournamentRenameTitleWrapper>
        <S.ImgWrapper>
          <img src={RankingImg} alt='최종-순위-확인' />
        </S.ImgWrapper>

        <S.Title>최종 순위 확인</S.Title>
        <SubTitle>
          {giftee}님을 위한 <br />
          최종 선물 순위를 확인하세요
        </SubTitle>
        <S.ButtonWrapper>
          <S.LinkButton onClick={() => handleCopyToClipboard(`${baseURL}${location.pathname}`)}>
            링크로 공유
          </S.LinkButton>
          <S.LinkButton onClick={() => shareKakao()}>카카오 공유</S.LinkButton>
        </S.ButtonWrapper>
        <S.Line></S.Line>
      </S.TournamentRenameTitleWrapper>
    </section>
  );
};

export default TournamentRankingTitle;
