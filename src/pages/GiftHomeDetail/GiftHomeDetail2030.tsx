import * as S from './GiftHomeDetail.styled';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import useGetHotProduct from '../../hooks/queries/product/useGetHotProduct';
import { useLocation } from 'react-router-dom';

function GiftHomeDetail() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const params = searchParams.get('roomId');
  const roomId = params?.split('targetTime=')[0];
  const targetDate = params?.split('targetTime=')[1];

  const roomIdNumber = parseInt(roomId || '');
  const { data, isLoading, isError } = useGetHotProduct({ roomId: roomIdNumber });

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (isError || !data) {
    return <div>ERROR,,,</div>;
  }
  console.log('뭐가 들어오고 있니?', targetDate);

  return (
    <S.GiftHomeDetailPageWrapper>
      {/* 공통 헤더 추가 예정 */}
      <MiniTimer targetDate={targetDate || ''} />
      <S.GiftHomeDetailWrapper>
        {data.data.hotProductDtoList.length > 0 ? (
          data.data.hotProductDtoList.map((item) => (
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

export default GiftHomeDetail;
