import * as S from '../common/GiftHomeShowcaseItem.styled';

interface GiftHome2030ItemProps {
  imgUrl: string;
  title: string;
  price: string;
}

const GiftHome2030Item = ({ imgUrl, title, price }: GiftHome2030ItemProps) => {
  return (
    <S.GiftsItemWrapper>
      <S.GiftsItemImage src={imgUrl} />
      <S.GiftsItemTitle>{title}</S.GiftsItemTitle>
      <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
    </S.GiftsItemWrapper>
  );
};

export default GiftHome2030Item;
