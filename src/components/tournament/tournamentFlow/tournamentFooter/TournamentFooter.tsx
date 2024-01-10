import { IcLeft } from '../../../../assets/svg';
import BtnNext from '../../../common/Button/Next/BtnNext';
import * as S from './TournamentFooter.style';

const TournamentFooter = () => {
  return (
    <>
      <S.TournamentFooterWrapper>
        <S.Btnpre>
          이전
          <IcLeft style={{ width: '2.4rem', height: '2.4rem' }} />
        </S.Btnpre>
        <BtnNext>다음</BtnNext>
      </S.TournamentFooterWrapper>
    </>
  );
};

export default TournamentFooter;
