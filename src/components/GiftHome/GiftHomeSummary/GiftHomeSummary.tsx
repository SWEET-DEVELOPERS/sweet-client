import * as S from './GiftHomeSummary.styled';

export default function GiftHomeSummary() {
  const friendsNumber = 42;
  const giftOwner = '가나다라마바사아자차';

  return (
    <S.GiftHomeSummaryWrapper>
      <S.FriendsNumber>{friendsNumber}명의 친구들이 함께하는 중</S.FriendsNumber>
      <S.GiftHomeSummaryTitle>
        <S.PinkTitle>{giftOwner}</S.PinkTitle>님의
      </S.GiftHomeSummaryTitle>
      <S.GiftHomeSummaryTitle>선물을 함께 준비해요</S.GiftHomeSummaryTitle>
    </S.GiftHomeSummaryWrapper>
  );
}
