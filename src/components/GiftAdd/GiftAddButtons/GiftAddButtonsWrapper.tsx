import { IcBookmark, IcCancelCircleFinal } from '../../../assets/svg';
import { GiftType } from '../../../types/gift';
import * as S from './GiftAddButtonsWrapper.styled';

interface GiftAddButtonsProps {
  data: GiftType;
  onClick: () => void;
}

const GiftAddButtonsWrapper = ({ data, onClick }: GiftAddButtonsProps) => {
  return (
    <S.GiftsItemWrapper onClick={() => onClick()}>
      <IcBookmark
        style={{
          position: 'absolute',
          left: '0.8rem',
          top: '-0.4rem',
          width: '2.8rem',
          height: '5.2rem',
        }}
      />
      <IcCancelCircleFinal
        style={{
          position: 'absolute',
          right: '0.5rem',
          top: '0.5rem',
          width: '2.4rem',
          height: '2.4rem',
          cursor: 'pointer',
        }}
      />
      <S.GiftsItemImage src={data.imageUrl} />
      <S.GiftsItemTitle>{data.name}</S.GiftsItemTitle>
      <S.GiftsItemPrice>{data.cost}원</S.GiftsItemPrice>
    </S.GiftsItemWrapper>
  );
};

export default GiftAddButtonsWrapper;
