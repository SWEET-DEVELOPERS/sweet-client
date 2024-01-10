import React from 'react';
import BtnFill from '../../../common/Button/Cta/fill/BtnFill';
import styled from 'styled-components';

interface TournamentStartButtonProps {
  onClick: () => void;
}

const TournamentStartButton: React.FC<TournamentStartButtonProps> = ({ onClick }) => {
  return (
    <TournamentStartButtonWrapper>
      <BtnFill customStyle={{ backgroundColor: '#FF2176', border: 'none' }} onClick={onClick}>
        시작하기
      </BtnFill>
    </TournamentStartButtonWrapper>
  );
};

const TournamentStartButtonWrapper = styled.div`
  position: absolute;
  margin-bottom: 2rem;
  bottom: 0;
`;

export default TournamentStartButton;
