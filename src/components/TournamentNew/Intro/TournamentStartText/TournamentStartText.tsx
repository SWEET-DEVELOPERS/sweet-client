import * as S from './TournamentStartText.style';

interface TournamentTitleGifteeProps {
  giftee?: string;
}

const TournamentStartText = ({ giftee }: TournamentTitleGifteeProps) => {
  return (
    <S.TournamentStartTextWrapper>
      <S.SubTitle>선물 등록이 마감되어</S.SubTitle>
      <S.Title>
        <S.UserName>{giftee}</S.UserName>님을 위한 <br />
        선물 토너먼트를 시작합니다
      </S.Title>
    </S.TournamentStartTextWrapper>
  );
};

export default TournamentStartText;
