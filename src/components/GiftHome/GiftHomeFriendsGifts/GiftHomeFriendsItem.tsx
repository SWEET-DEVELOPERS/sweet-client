import GiftHomePriceTag from '../../common/GiftHome/Price/GiftHomePriceTag';
import * as S from '../common/GiftHomeShowcaseItem.styled';

interface GiftHomeFriendsItemProps {
  imgUrl: string;
  title: string;
  price: number;
  user: string;
}

const GiftHomeFriendsItem = ({ imgUrl, title, price, user }: GiftHomeFriendsItemProps) => (
  <>
    <S.GiftsItemWrapper>
      <S.GiftsItemImage src={imgUrl} />
      <S.GiftsItemTitle>{title}</S.GiftsItemTitle>
      <S.GiftsItemPrice>
        <GiftHomePriceTag price={price} fonts={'body_09'} />
      </S.GiftsItemPrice>
      <S.GiftsItemUser>{user}</S.GiftsItemUser>
    </S.GiftsItemWrapper>
  </>
);

export default GiftHomeFriendsItem;
