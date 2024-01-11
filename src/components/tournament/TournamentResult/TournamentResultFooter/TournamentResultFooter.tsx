import BtnFill from '../../../common/Button/Cta/fill/BtnFill';
import styled from 'styled-components';
const TournamentResultFooter = () => {
  return (
    <TournamentResultFooterWrapper>
      <BtnFill>다시하기</BtnFill>
      <BtnFill>결과 제출하기</BtnFill>
    </TournamentResultFooterWrapper>
  );
};

const TournamentResultFooterWrapper = styled.footer`
  display: flex;
`;

export default TournamentResultFooter;
