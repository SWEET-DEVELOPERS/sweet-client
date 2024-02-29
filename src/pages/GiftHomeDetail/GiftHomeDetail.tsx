import * as S from './GiftHomeDetail.styled';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import useGetHotProduct from '../../hooks/queries/product/useGetHotProduct';
import { useParams } from 'react-router-dom';
import GiftHomePriceTag from '../../components/common/GiftHome/Price/GiftHomePriceTag';
import GiftDetailHeader from '../../components/common/GiftDetail/GiftDetailHeader';

export const GiftHomeDetail = () => {
  const params = useParams();
  const roomId = params.roomId;
  const targetDate = params.targetDate;

  const roomIdNumber = parseInt(roomId || '');
  const { data } = useGetHotProduct({ roomId: roomIdNumber });

  return (
    <S.GiftHomeDetailPageWrapper>
      <GiftDetailHeader title='요즘 2030이 주목하는 선물' roomId={roomId || ''} />
      <MiniTimer targetDate={targetDate?.toString() || ''} giftee={data.data.gifteeName} />
      <S.GiftHomeDetailWrapper>
        {data.data.hotProductDtoList.length > 0 ? (
          data.data.hotProductDtoList.map((item, index) => (
            <S.GiftsItemWrapper key={index} onClick={() => window.open(item.url)}>
              <S.GiftsItemImage src={item.imageUrl} />
              <S.GiftsItemTitle>{item.name}</S.GiftsItemTitle>
              <S.GiftsItemPrice>
                <GiftHomePriceTag price={item.cost} fonts={'body_07'} gap={0.1} colors={'black'} />
              </S.GiftsItemPrice>
            </S.GiftsItemWrapper>
          ))
        ) : (
          <></>
        )}
      </S.GiftHomeDetailWrapper>
    </S.GiftHomeDetailPageWrapper>
  );
};
export default GiftHomeDetail;
