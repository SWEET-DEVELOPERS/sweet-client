import * as S from '../common/GiftHomeShowcase.styled';
import GiftHomeShowcaseHeader from '../common/GiftHomeShowcaseHeader/GiftHomeShowcaseHeader';
import GiftHomeFriendsItem from './GiftHomeFriendsItem';

interface GiftHomeFriendsGiftsProps {
  data: {
    price: string;
    title: string;
    user: string;
    imgUrl: string;
  }[];
}

export default function GiftHomeFriendsGifts({ data }: GiftHomeFriendsGiftsProps) {
  return (
    <S.GiftHomeShowcaseWrapper>
      <GiftHomeShowcaseHeader title={'친구가 등록한 선물'} />
      {data.length > 0 ? (
        <S.GiftsWrapper>
          {data.map((gift, index) => (
            <GiftHomeFriendsItem
              key={index}
              imgUrl={gift.imgUrl}
              title={gift.title}
              price={gift.price}
              user={gift.user}
            />
          ))}
        </S.GiftsWrapper>
      ) : (
        <S.NoGiftsWrapper>아직 선물이 등록되지 않았어요</S.NoGiftsWrapper>
      )}
    </S.GiftHomeShowcaseWrapper>
  );
}
