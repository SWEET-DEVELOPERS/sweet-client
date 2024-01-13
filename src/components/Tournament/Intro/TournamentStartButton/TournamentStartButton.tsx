import React from 'react';
import BtnFill from '../../../common/Button/Cta/fill/BtnFill';
import * as S from './TournamentStartButton.style';

interface TournamentStartButtonProps {
  onClick: () => void;
}

const TournamentStartButton: React.FC<TournamentStartButtonProps> = ({ onClick }) => {
  return (
    <S.TournamentStartButtonWrapper>
      <BtnFill customStyle={{ backgroundColor: '#FF2176', border: 'none' }} onClick={onClick}>
        시작하기
      </BtnFill>
    </S.TournamentStartButtonWrapper>
  );
};

export default TournamentStartButton;
