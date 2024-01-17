import * as S from './GiftHomeDetail.styled';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import useGetHotProduct from '../../hooks/queries/product/useGetHotProduct';

interface GiftHomeDetailProps {
  roomId: number;
}

function GiftHomeDetail({ roomId }: GiftHomeDetailProps) {
  const { data, isLoading, isError } = useGetHotProduct({ roomId: Number(roomId) });
  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (isError || !data) {
    return <div>ERROR,,,</div>;
  }

  return (
    <S.GiftHomeDetailPageWrapper>
      {/* 공통 헤더 추가 예정 */}
      <MiniTimer targetDate={data.data.tournamentStartDate.toLocaleString()} />
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
