import { IcLeft } from '../../../../assets/svg';
import BtnNext from '../../../common/Button/Next/BtnNext';
import * as S from './TournamentFooter.style';

interface TournamentFooterProps {
  onNextClick: () => void;
  disabled: boolean;
}

const TournamentFooter = ({ onNextClick }: TournamentFooterProps) => {
  return (
    <>
      <S.TournamentFooterWrapper>
        <S.Btnpre>
          <IcLeft style={{ width: '2.4rem', height: '2.4rem' }} />
          이전
        </S.Btnpre>
        <BtnNext onClick={onNextClick}>
          다음
        </BtnNext>
      </S.TournamentFooterWrapper>
    </>
  );
};

export default TournamentFooter;
