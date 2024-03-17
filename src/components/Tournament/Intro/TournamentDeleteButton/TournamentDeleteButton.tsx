import BtnFill from '../../../common/Button/Cta/fill/BtnFill';
import * as S from './TournamentDeleteButton.style';
interface TournamentDeleteButtonProps {
  onClick: (roomId: number) => void;
  roomId: number; // roomId를 props로 받음
}

const TournamentDeleteButton = ({ onClick, roomId }: TournamentDeleteButtonProps) => {
  return (
    <S.TournamentStartButtonWrapper>
      <BtnFill
        customStyle={{
          width: '33.5rem',
          height: '5.2rem',
          backgroundColor: '#FF2176',
          border: 'none',
        }}
        onClick={() => onClick(roomId)} // props로 받은 roomId를 사용
      >
        선물방 종료하기
      </BtnFill>
    </S.TournamentStartButtonWrapper>
  );
};

export default TournamentDeleteButton;
