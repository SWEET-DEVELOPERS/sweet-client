import BtnFill from '../../../common/Button/Cta/fill/BtnFill';
import styled from 'styled-components';

export default function TournamentStartButton() {
  return (
    <TournamentStartButtonWrapper>
      <BtnFill customStyle={{ backgroundColor: '#FF2176', border: 'none' }}>시작하기</BtnFill>
    </TournamentStartButtonWrapper>
  );
}

const TournamentStartButtonWrapper = styled.div`
  position: absolute;
  margin-bottom: 2rem;
  bottom: 0;
`;
