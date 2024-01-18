import GiftHomeMyGiftsItem from '../../../components/GiftHome/GiftHomeMyGifts/GiftHomeMyGiftsItem';
import GiftHomeShowcaseHeader from '../../../components/GiftHome/common/GiftHomeShowcaseHeader/GiftHomeShowcaseHeader';
import { MyGiftsType } from '../../../types/room';
import * as S from './GiftHomeMyGifts.style';

interface GiftHomeMyGiftsProps {
  roomId: number;
  data: MyGiftsType[];
  targetDate: Date;
}

const GiftHomeMyGifts = ({ roomId, data, targetDate }: GiftHomeMyGiftsProps) => {
  return (
    <S.GiftHomeMyGiftsWrapper>
      <GiftHomeShowcaseHeader
        targetDate={targetDate}
        roomId={roomId}
        title={'내가 등록한 선물'}
        category='my'
        length={data.length}
      />
      <S.GiftsWrapper>
        {data.map((gift, index) => (
          <GiftHomeMyGiftsItem
            key={index}
            imageUrl={gift.imageUrl}
            name={gift.name}
            cost={gift.cost}
          />
        ))}
      </S.GiftsWrapper>
    </S.GiftHomeMyGiftsWrapper>
  );
};

export default GiftHomeMyGifts;
