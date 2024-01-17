import * as S from './TournamentItemCount.style';
import mockupData from '../../../../core/mockupData';

export default function TournamentItemCount() {
  const count = mockupData.length;
  return (
    <S.TournamentItemCountWrapper>
      <S.TotalItems>총 등록된 선물 {count}개</S.TotalItems>
    </S.TournamentItemCountWrapper>
  );
}
