import * as S from './GiftHomeDetail.styled';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';

function GiftHomeDetail() {
  const price = 42000;
  const name = '왕호은';
  const time = '00:00:00';

  return (
    <S.GiftHomeDetailPageWrapper>
      {/* 공통 헤더 추가 예정 */}
      <MiniTimer time={time} />
      <S.GiftHomeDetailWrapper>
        <S.GiftsItemWrapper>
          <S.GiftsItemImage></S.GiftsItemImage>
          <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
          <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
          <S.GiftsItemUser>{name}</S.GiftsItemUser>
        </S.GiftsItemWrapper>
        <S.GiftsItemWrapper>
          <S.GiftsItemImage></S.GiftsItemImage>
          <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
          <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
          <S.GiftsItemUser>{name}</S.GiftsItemUser>
        </S.GiftsItemWrapper>
        <S.GiftsItemWrapper>
          <S.GiftsItemImage></S.GiftsItemImage>
          <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
          <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
          <S.GiftsItemUser>{name}</S.GiftsItemUser>
        </S.GiftsItemWrapper>
        <S.GiftsItemWrapper>
          <S.GiftsItemImage></S.GiftsItemImage>
          <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
          <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
          <S.GiftsItemUser>{name}</S.GiftsItemUser>
        </S.GiftsItemWrapper>
      </S.GiftHomeDetailWrapper>
    </S.GiftHomeDetailPageWrapper>
  );
}

export default GiftHomeDetail;
