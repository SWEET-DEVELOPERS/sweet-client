import React from 'react';
import { IcLeft } from '../../../../assets/svg';
import BtnNext from '../../../common/Button/Next/BtnNext';
import * as S from './TournamentFooter.style';

interface TournamentFooterProps {
  onNextClick: () => void;
  disabled: boolean;
}

const TournamentFooter = ({ onNextClick, disabled }: TournamentFooterProps) => {
  return (
    <>
      <S.TournamentFooterWrapper>
        <S.Btnpre>
          <IcLeft style={{ width: '2.4rem', height: '2.4rem' }} />
          이전
        </S.Btnpre>
        <BtnNext onClick={onNextClick} disabled={disabled}>
          다음
        </BtnNext>
      </S.TournamentFooterWrapper>
    </>
  );
};

export default TournamentFooter;
