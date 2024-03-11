import * as S from './TournamentRankingTitle.style';
import RankingImg from '../../../../assets/img/3dic_podium2.png';
import { useEffect } from 'react';
import { IcShare, KakaoLo } from '../../../../assets/svg';
import { shareKakao } from '../../../../utils/shareKakaoLink';
// import { useLocation } from 'react-router-dom';
// import useClipboard from '../../../../hooks/useCopyClip';

interface TournamentRankingGifteeProps {
  roomId: number;
  giftee?: string;
}

const TournamentRankingTitle = ({ giftee, roomId }: TournamentRankingGifteeProps) => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: '최종 순위 확인',
        text: `${giftee}님을 위한 최종 선물 순위를 확인하세요`,
        url: window.location.href,
      });
    } catch (error) {
      console.error('Web Share API를 지원하지 않습니다.');
    }
  };

  const gifteeValue = giftee;
  const roomIdValue = roomId;

  // const location = useLocation();
  // const baseURL = import.meta.env.VITE_APP_BASE_URL_KAKAO;
  // const { handleCopyToClipboard } = useClipboard();

  return (
    <section>
      <S.TournamentRenameTitleWrapper>
        <S.ImgWrapper>
          <img src={RankingImg} alt='최종-순위-확인' />
        </S.ImgWrapper>

        <S.Title>최종 순위 확인</S.Title>
        <S.SubTitle>
          <S.PinkText>{giftee}</S.PinkText>님을 위한 <br />
          최종 선물 순위를 확인하세요
        </S.SubTitle>
        <S.ButtonWrapper>
          <S.LinkButton onClick={handleShare}>
            <p>
              <IcShare style={{ width: '1.8rem', height: '1.8rem', cursor: 'pointer' }} />
              공유하기
            </p>
          </S.LinkButton>

          <S.KakaoButton onClick={() => shareKakao(gifteeValue, roomIdValue)}>
            <KakaoLo style={{ width: '1.7rem', height: '1.7rem', cursor: 'pointer' }} />
            카카오 공유
          </S.KakaoButton>
        </S.ButtonWrapper>
        <S.Line></S.Line>
      </S.TournamentRenameTitleWrapper>
    </section>
  );
};

export default TournamentRankingTitle;
