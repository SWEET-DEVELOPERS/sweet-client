import * as S from './GiftHomeDetail.styled';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import useGetFriendGift from '../../hooks/queries/gift/useGetFriendGift';
import { useLocation } from 'react-router-dom';

function GiftHomeDetailFriends() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const params = searchParams.get('roomId');
  const roomId = params?.split('targetTime=')[0];
  const targetDate = params?.split('targetTime=')[1];

  // console.log('추출된 roomId', roomId);
  // console.log('추출된 targetDate', targetDate);
  const roomIdNumber = parseInt(roomId || '');
  const { data, isLoading, isError } = useGetFriendGift({ roomId: roomIdNumber });

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (isError || !data) {
    return <div>ERROR,,,</div>;
  }

  return (
    <S.GiftHomeDetailPageWrapper>
      {/* 공통 헤더 추가 예정 */}
      <MiniTimer targetDate={targetDate || ''} />
      <S.GiftHomeDetailWrapper>
        {data.data.friendGiftDto.length > 0 ? (
          data.data.friendGiftDto.map((item, index) => (
            <S.GiftsItemWrapper key={index}>
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
