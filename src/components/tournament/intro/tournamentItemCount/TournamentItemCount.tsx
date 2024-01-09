import * as S from './TournamentItemCount.style';

export default function TournamentItemCount() {
  const price = 16;
  return (
    <S.TournamentItemCountWrapper>
      <S.TotalItems>총 등록된 선물 {price}개</S.TotalItems>
    </S.TournamentItemCountWrapper>
  );
}
