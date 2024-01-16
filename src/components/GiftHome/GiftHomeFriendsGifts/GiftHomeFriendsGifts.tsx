import { friendGiftDtoType } from '../../../types/room';
import * as S from '../common/GiftHomeShowcase.styled';
import GiftHomeShowcaseHeader from '../common/GiftHomeShowcaseHeader/GiftHomeShowcaseHeader';
import GiftHomeFriendsItem from './GiftHomeFriendsItem';

interface GiftHomeFriendsGiftsProps {
  data: friendGiftDtoType[];
}

export default function GiftHomeFriendsGifts({ data }: GiftHomeFriendsGiftsProps) {
  return (
    <S.GiftHomeShowcaseWrapper>
      <GiftHomeShowcaseHeader title={'친구가 등록한 선물'} category='friends' />
      {data.length > 0 ? (
        <S.GiftsWrapper>
          {data.map((gift, index) => (
            <GiftHomeFriendsItem
              key={index}
              imgUrl={gift.imageUrl}
              title={gift.name}
              price={gift.cost}
              user={gift.giftOwner}
            />
          ))}
        </S.GiftsWrapper>
      ) : (
        <S.NoGiftsWrapper>아직 선물이 등록되지 않았어요</S.NoGiftsWrapper>
      )}
    </S.GiftHomeShowcaseWrapper>
  );
}
