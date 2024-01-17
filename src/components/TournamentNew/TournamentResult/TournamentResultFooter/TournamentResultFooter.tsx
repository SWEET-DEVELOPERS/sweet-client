import BtnFill from '../../../common/Button/Cta/fill/BtnFill';
import styled from 'styled-components';
interface TournamentResultFooterProps {
  onClick?: () => void; // Add the onClick prop
}
const TournamentResultFooter: React.FC<TournamentResultFooterProps> = ({ onClick }) => {
  return (
    <TournamentResultFooterWrapper>
      <BtnFill
        customStyle={{
          width: '16.4rem',
          background: '#FFF',
          color: 'black',
          border: '1px solid #FF2176',
        }}
      >
        다시하기
      </BtnFill>
      <BtnFill customStyle={{ width: '16.4rem', background: '#FF2176' }} onClick={onClick}>
        결과 제출하기
      </BtnFill>
    </TournamentResultFooterWrapper>
  );
};

const TournamentResultFooterWrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 0.8rem;
  height: 5.2rem;
`;

export default TournamentResultFooter;
