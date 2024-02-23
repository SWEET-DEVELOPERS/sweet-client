import BtnFill from '../../../common/Button/Cta/fill/BtnFill';
import * as S from './TournamentDeleteButton.style';

interface TournamentStartButtonProps {
  onClick: () => void;
}

const TournamentDeleteButton = ({ onClick }: TournamentStartButtonProps) => {
  return (
    <S.TournamentStartButtonWrapper>
      <BtnFill
        customStyle={{
          width: '33.5rem',
          height: '5.2rem',
          backgroundColor: '#FF2176',
          border: 'none',
        }}
        onClick={onClick}
      >
        선물방 종료하기
      </BtnFill>
    </S.TournamentStartButtonWrapper>
  );
};

export default TournamentDeleteButton;