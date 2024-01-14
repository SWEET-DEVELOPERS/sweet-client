import * as S from '../common/GiftHomeShowcaseItem.styled';

interface GiftHomeFriendsItemProps {
  imgUrl: string;
  title: string;
  price: string;
  user: string;
}

const GiftHomeFriendsItem = ({ imgUrl, title, price, user }: GiftHomeFriendsItemProps) => {
  return (
    <>
      <S.GiftsItemWrapper>
        <S.GiftsItemImage src={imgUrl} />
        <S.GiftsItemTitle>{title}</S.GiftsItemTitle>
        <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
        <S.GiftsItemUser>{user}</S.GiftsItemUser>
      </S.GiftsItemWrapper>
    </>
  );
};

export default GiftHomeFriendsItem;
