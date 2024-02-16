import { GiftData } from '../../../../types/tournament';
import * as S from './TournamentItemCount.style';

interface TournamentProps {
  memberData: GiftData[];
}

const TournamentItemCount = ({ memberData }: TournamentProps) => {
  const count = memberData.length;
  return (
    <S.TournamentItemCountWrapper>
      <S.TotalItems>총 등록된 선물 {count}개</S.TotalItems>
    </S.TournamentItemCountWrapper>
  );
};

export default TournamentItemCount;
