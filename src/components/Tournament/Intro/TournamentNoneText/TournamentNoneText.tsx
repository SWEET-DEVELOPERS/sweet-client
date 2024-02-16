import * as S from './TournamentNoneText.style';

const TournamentNoneText = () => {
  return (
    <S.TournamentStartTextWrapper>
      <S.Title>토너먼트를 시작할 수 없어요</S.Title>
      <S.SubTitle>
        선물이 등록되어야 <br />
        토너먼트를 시작할 수 있어요
      </S.SubTitle>
    </S.TournamentStartTextWrapper>
  );
};

export default TournamentNoneText;
