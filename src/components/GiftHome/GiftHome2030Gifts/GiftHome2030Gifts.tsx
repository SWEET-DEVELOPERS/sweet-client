import { HotGiftsType } from '../../../types/room';
import MiniTimer from '../../common/MiniTimer/MiniTimer';
import * as S from '../common/GiftHomeShowcase.styled';
import GiftHomeShowcaseHeader from '../common/GiftHomeShowcaseHeader/GiftHomeShowcaseHeader';
import GiftHome2030Item from './GiftHome2030Item';

interface GiftHome2030GiftsProps {
  data: HotGiftsType[];
  targetDate: string;
}

export default function GiftHome2030Gifts({ data, targetDate }: GiftHome2030GiftsProps) {
  return (
    <S.GiftHomeShowcaseWrapper>
      <GiftHomeShowcaseHeader
        title={'요즘 2030이 주목하는 선물'}
        category='2030'
        length={data.length}
      />
      <MiniTimer targetDate={targetDate} />
      {data.length > 0 ? (
        <S.GiftsWrapper>
          {data.map((gift, index) => (
            <GiftHome2030Item
              key={index}
              imgUrl={gift.imageUrl}
              title={gift.name}
              price={gift.cost}
            />
          ))}
        </S.GiftsWrapper>
      ) : (
        <S.NoGiftsWrapper>아직 선물이 등록되지 않았어요</S.NoGiftsWrapper>
      )}
    </S.GiftHomeShowcaseWrapper>
  );
}
