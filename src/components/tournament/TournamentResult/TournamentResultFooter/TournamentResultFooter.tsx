import BtnFill from '../../../common/Button/Cta/fill/BtnFill';
import styled from 'styled-components';
const TournamentResultFooter = () => {
  return (
    <TournamentResultFooterWrapper>
      <BtnFill customStyle={{ width: '16.4rem' }}>다시하기</BtnFill>
      <BtnFill customStyle={{ width: '16.4rem' }}>결과 제출하기</BtnFill>
    </TournamentResultFooterWrapper>
  );
};

const TournamentResultFooterWrapper = styled.footer`
  display: flex;
  height: 5.2rem;
`;

export default TournamentResultFooter;
