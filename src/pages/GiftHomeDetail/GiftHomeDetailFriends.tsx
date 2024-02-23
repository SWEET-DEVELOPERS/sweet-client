import * as S from './GiftHomeDetail.styled';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import useGetFriendGift from '../../hooks/queries/gift/useGetFriendGift';
import { useParams } from 'react-router-dom';
import GiftHomePriceTag from '../../components/common/GiftHome/Price/GiftHomePriceTag';
import GiftDetailHeader from '../../components/common/GiftDetail/GiftDetailHeader';

function GiftHomeDetailFriends() {
  const params = useParams();
  const roomId = params.roomId;
  const targetDate = params.targetDate;

  const roomIdNumber = parseInt(roomId || '');
  const { data } = useGetFriendGift({ roomId: roomIdNumber });

  return (
    <S.GiftHomeDetailPageWrapper>
      <GiftDetailHeader title='친구가 등록한 선물' roomId={roomId || ''} />
      <MiniTimer
        targetDate={targetDate?.toString() || ''}
        giftee={data.data.roomInfoResponseDto.gifteeName}
      />
      <S.GiftHomeDetailWrapper>
        {data.data.friendGiftDto.length > 0 ? (
          data.data.friendGiftDto.map((item, index) => (
            <S.GiftsItemWrapper key={index} onClick={() => window.open(item.url)}>
              <S.GiftsItemImage src={item.imageUrl} />
              <S.GiftsItemTitle>{item.name}</S.GiftsItemTitle>
              <GiftHomePriceTag price={item.cost} fonts={`body_07`} />
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
