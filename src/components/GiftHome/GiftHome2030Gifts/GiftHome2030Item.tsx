import GiftHomePriceTag from '../../common/GiftHome/Price/GiftHomePriceTag';
import * as S from '../common/GiftHomeShowcaseItem.styled';

interface GiftHome2030ItemProps {
  imgUrl: string;
  title: string;
  price: number;
  url: string;
}

const GiftHome2030Item = ({ imgUrl, title, price, url }: GiftHome2030ItemProps) => {
  return (
    <S.GiftsItemWrapper onClick={() => window.open(url)}>
      <S.GiftsItemImage src={imgUrl} />
      <S.GiftsItemTitle>{title}</S.GiftsItemTitle>
      <S.GiftsItemPrice>
        <GiftHomePriceTag price={price} fonts={'body_09'} />
      </S.GiftsItemPrice>
    </S.GiftsItemWrapper>
  );
};

export default GiftHome2030Item;
