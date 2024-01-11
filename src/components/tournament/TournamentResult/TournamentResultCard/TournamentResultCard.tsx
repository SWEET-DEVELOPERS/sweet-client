import exampleItemImg from '../../../../assets/img/Rectangle.png';
import * as S from './TournamentResultCard.style';
const TournamentResultCard = () => {
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <>
      <S.TournamentCardWrapper>
        <S.TournamentImgWrapper>
          <img src={exampleItemImg} alt='제품이미지' />
        </S.TournamentImgWrapper>

        <S.ItemInfo>
          <S.Title>임영웅 콘서트 Gold열 임영웅 콘서트 Gold열</S.Title>
          <S.Price>{formatPrice(8130000)}원</S.Price>
        </S.ItemInfo>
      </S.TournamentCardWrapper>
    </>
  );
};

export default TournamentResultCard;
