import * as S from './GiftHomeDetail.styled';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import useGetHotProduct from '../../hooks/queries/product/useGetHotProduct';
import { useParams } from 'react-router-dom';
import GiftHomePriceTag from '../../components/common/GiftHome/Price/GiftHomePriceTag';
import GiftDetailHeader from '../../components/common/GiftDetail/GiftDetailHeader';

function GiftHomeDetail() {
  // const location = useLocation();

  // const searchParams = new URLSearchParams(location.search);
  // const roomId = searchParams.get('roomId');
  // console.log('roomId', roomId);
  // const targetDate = searchParams.get('targetTime');
  const params = useParams();
  console.log('params', params);
  const roomId = params.roomId;
  console.log('뭔데?!', roomId);

  const targetDate = params.targetDate;
  const roomIdNumber = parseInt(roomId || '');
  const { data } = useGetHotProduct({ roomId: roomIdNumber });

  return (
    <S.GiftHomeDetailPageWrapper>
      <GiftDetailHeader
        title='요즘 2030이 주목하는 선물'
        roomId={roomId || ''}
        // targetDate={targetDate || ''}
      />
      <MiniTimer targetDate={targetDate?.toString() || ''} />
      <S.GiftHomeDetailWrapper>
        {data.data.hotProductDtoList.length > 0 ? (
          data.data.hotProductDtoList.map((item, index) => (
            <S.GiftsItemWrapper key={index} onClick={() => window.open(item.url)}>
              <S.GiftsItemImage src={item.imageUrl} />
              <S.GiftsItemTitle>{item.name}</S.GiftsItemTitle>
              <S.GiftsItemPrice>
                <GiftHomePriceTag price={item.cost} fonts={'body_07'} />
              </S.GiftsItemPrice>
            </S.GiftsItemWrapper>
          ))
        ) : (
          <></>
        )}
      </S.GiftHomeDetailWrapper>
    </S.GiftHomeDetailPageWrapper>
  );
}

export default GiftHomeDetail;
