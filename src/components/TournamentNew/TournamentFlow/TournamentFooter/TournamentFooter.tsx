import BtnNext from '../../../common/Button/Next/BtnNext';
import * as S from './TournamentFooter.style';

interface TournamentFooterProps {
  onNextClick: () => void;
  disabled: boolean;
}

const TournamentFooter = ({ onNextClick, disabled }: TournamentFooterProps) => {
  console.log('여기선?', disabled);
  return (
    <>
      <S.TournamentFooterWrapper>
        <BtnNext onClick={onNextClick} disabled={disabled}>
          다음
        </BtnNext>
      </S.TournamentFooterWrapper>
    </>
  );
};

export default TournamentFooter;
