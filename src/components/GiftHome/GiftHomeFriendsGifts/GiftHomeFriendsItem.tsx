import GiftHomePriceTag from '../../common/GiftHome/Price/GiftHomePriceTag';
import * as S from '../common/GiftHomeShowcaseItem.styled';

interface GiftHomeFriendsItemProps {
  imgUrl: string;
  title: string;
  price: number;
  user: string;
  url: string;
}

const GiftHomeFriendsItem = ({ imgUrl, title, price, user, url }: GiftHomeFriendsItemProps) => (
  <>
    <S.GiftsItemWrapper onClick={() => window.open(url)}>
      <S.GiftsItemImage src={imgUrl} />
      <S.GiftsItemTitle>{title}</S.GiftsItemTitle>
      <S.GiftsItemPrice>
        <GiftHomePriceTag gap={0.1} colors={'black'} price={price} fonts={'body_09'} />
      </S.GiftsItemPrice>
      <S.GiftsItemUser>{user}</S.GiftsItemUser>
    </S.GiftsItemWrapper>
  </>
);

export default GiftHomeFriendsItem;
