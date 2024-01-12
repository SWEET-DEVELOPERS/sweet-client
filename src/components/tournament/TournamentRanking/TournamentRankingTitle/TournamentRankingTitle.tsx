import { IcImgShare, IcLinkShare, Image477 } from '../../../../assets/svg';
import * as S from './TournamentRankingTitle.style';
import { SubTitle } from '../../intro/tournamentStartText/TournamentStartText.style';

const TournamentRenameTitle = () => {
  return (
    <div>
      <S.TournamentRenameTitleWrapper>
        <Image477 />
        <S.Title>최종 순위 확인</S.Title>
        <SubTitle>
          시동훈님을 <br />
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
