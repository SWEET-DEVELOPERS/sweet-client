import * as S from './TournamernTitle.style';

const TournamentTitle = () => {
  const round = 1;
  return (
    <>
      {/* 라운드 컴포넌트 */}
      <S.Title>Round {round}</S.Title>
      <S.SetCount>1/6</S.SetCount>
      {/* 세트 수 현재 상황 */}
    </>
  );
};

export default TournamentTitle;
