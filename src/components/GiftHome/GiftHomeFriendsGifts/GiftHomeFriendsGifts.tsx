import * as S from '../GiftHomeShowcase.styled';

export default function GiftHomeFriendsGifts() {
  const isGift = true;
  const price = 42000;
  const user = '강국희';

  return (
    <S.GiftHomeShowcaseWrapper>
      {/* 공통 헤더 넣을 예정 */}
      {isGift ? (
        <S.GiftsWrapper>
          <S.GiftsItemWrapper>
            <S.GiftsItemImage></S.GiftsItemImage>
            <S.GiftsItemTitle>오로라 레터링 케이크(소)</S.GiftsItemTitle>
            <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
            <S.GiftsItemUser>{user}</S.GiftsItemUser>
          </S.GiftsItemWrapper>
          <S.GiftsItemWrapper>
            <S.GiftsItemImage></S.GiftsItemImage>
            <S.GiftsItemTitle>오로라 레터링 케이크(소)</S.GiftsItemTitle>
            <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
            <S.GiftsItemUser>{user}</S.GiftsItemUser>
          </S.GiftsItemWrapper>
          <S.GiftsItemWrapper>
            <S.GiftsItemImage></S.GiftsItemImage>
            <S.GiftsItemTitle>오로라 레터링 케이크(소)</S.GiftsItemTitle>
            <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
            <S.GiftsItemUser>{user}</S.GiftsItemUser>
          </S.GiftsItemWrapper>
          <S.GiftsItemWrapper>
            <S.GiftsItemImage></S.GiftsItemImage>
            <S.GiftsItemTitle>오로라 레터링 케이크(소)</S.GiftsItemTitle>
            <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
            <S.GiftsItemUser>{user}</S.GiftsItemUser>
          </S.GiftsItemWrapper>
          <S.GiftsItemWrapper>
            <S.GiftsItemImage></S.GiftsItemImage>
            <S.GiftsItemTitle>오로라 레터링 케이크(소)</S.GiftsItemTitle>
            <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
            <S.GiftsItemUser>{user}</S.GiftsItemUser>
          </S.GiftsItemWrapper>
        </S.GiftsWrapper>
      ) : (
        <S.NoGiftsWrapper>아직 선물이 등록되지 않았어요</S.NoGiftsWrapper>
      )}
    </S.GiftHomeShowcaseWrapper>
  );
}
