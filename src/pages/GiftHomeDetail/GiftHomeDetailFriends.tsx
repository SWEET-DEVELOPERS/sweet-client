import * as S from './GiftHomeDetail.styled';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import useGetFriendGift from '../../hooks/queries/gift/useGetFriendGift';

interface GiftHomeDetailFriendsProps {
  roomId: number;
}

function GiftHomeDetailFriends({ roomId }: GiftHomeDetailFriendsProps) {
  const { data, isLoading, isError } = useGetFriendGift({ roomId: Number(roomId) });
  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (isError || !data) {
    return <div>ERROR,,,</div>;
  }

  const now = new Date();
  return (
    <S.GiftHomeDetailPageWrapper>
      {/* 공통 헤더 추가 예정 */}
      <MiniTimer time={now} />
      <S.GiftHomeDetailWrapper>
        {data.data.friendGiftDto.length > 0 ? (
          data.data.friendGiftDto.map((item) => (
            <S.GiftsItemWrapper>
              <S.GiftsItemImage src={item.imageUrl} />
              <S.GiftsItemTitle>{item.name}</S.GiftsItemTitle>
              <S.GiftsItemPrice>{item.cost}원</S.GiftsItemPrice>
            </S.GiftsItemWrapper>
          ))
        ) : (
          <></>
        )}
      </S.GiftHomeDetailWrapper>
    </S.GiftHomeDetailPageWrapper>
  );
}

export default GiftHomeDetailFriends;
