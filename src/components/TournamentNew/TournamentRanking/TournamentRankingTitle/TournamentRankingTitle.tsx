import * as S from './TournamentRankingTitle.style';
import { SubTitle } from '../../Intro/TournamentStartText/TournamentStartText.style';
import RankingImg from '../../../../assets/img/3dic_podium2.png';
const TournamentRenameTitle = () => {
  return (
    <div>
      <S.TournamentRenameTitleWrapper>
        <S.ImgWrapper>
          <img src={RankingImg} alt='최종-순위-확인' />
        </S.ImgWrapper>

        <S.Title>최종 순위 확인</S.Title>
        <SubTitle>
          시동훈님을 위한 <br />
          최종 선물 순위를 확인하세요
        </SubTitle>
        <S.ButtonWrapper>
          <S.LinkButton>
            {/* <IcLinkShare /> */}
            링크로 공유
          </S.LinkButton>
          <S.ImageButton>
            {/* <IcImgShare style={{ width: '1.8rem', height: '1.8rem' }} /> */}
            이미지로 공유
          </S.ImageButton>
        </S.ButtonWrapper>
        <S.Line></S.Line>
      </S.TournamentRenameTitleWrapper>
    </div>
  );
};

export default TournamentRenameTitle;
