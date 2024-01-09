import * as S from '../../components/GiftHomeDetail/GiftHomeDetail.styled';

function GiftHomeDetail() {
  const price = 42000;
  const name = '왕호은';
  const people = 3;

  return (
    <S.GiftHomeDetailWrapper>
      {/* 공통 헤더 추가 예정 */}
      {/* 미니 타이머 추가 예정 */}
      <S.GiftsItemWrapper>
        <S.GiftsItemImage></S.GiftsItemImage>
        <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
        <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
        <S.GiftsItemUser>
          {name} | 인당 {Math.floor(price / people)}원
        </S.GiftsItemUser>
      </S.GiftsItemWrapper>
      <S.GiftsItemWrapper>
        <S.GiftsItemImage></S.GiftsItemImage>
        <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
        <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
        <S.GiftsItemUser>
          {name} | 인당 {Math.floor(price / people)}원
        </S.GiftsItemUser>
      </S.GiftsItemWrapper>
      <S.GiftsItemWrapper>
        <S.GiftsItemImage></S.GiftsItemImage>
        <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
        <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
        <S.GiftsItemUser>
          {name} | 인당 {Math.floor(price / people)}원
        </S.GiftsItemUser>
      </S.GiftsItemWrapper>
      <S.GiftsItemWrapper>
        <S.GiftsItemImage></S.GiftsItemImage>
        <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
        <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
        <S.GiftsItemUser>
          {name} | 인당 {Math.floor(price / people)}원
        </S.GiftsItemUser>
      </S.GiftsItemWrapper>
    </S.GiftHomeDetailWrapper>
  );
}

export default GiftHomeDetail;
