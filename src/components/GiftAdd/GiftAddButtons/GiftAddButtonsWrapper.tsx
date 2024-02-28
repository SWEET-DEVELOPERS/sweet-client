import { IcBookmark, IcCancelCircleFinal } from '../../../assets/svg';
import { GiftType } from '../../../types/gift';
import GiftHomePriceTag from '../../common/GiftHome/Price/GiftHomePriceTag';
import * as S from './GiftAddButtonsWrapper.styled';

interface GiftAddButtonsProps {
  data: GiftType;
  onCancelClick: VoidFunction;
}

const GiftAddButtonsWrapper = ({ data, onCancelClick }: GiftAddButtonsProps) => {
  let imageUrl = data.imageUrl;

  return (
    <S.GiftsItemWrapper>
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
        onClick={() => onCancelClick()}
      />
      <S.GiftsItemImage src={imageUrl} />
      <S.GiftsItemTitle>{data.name}</S.GiftsItemTitle>
      <S.GiftsItemPrice>
        <GiftHomePriceTag price={data.cost} fonts={'body_09'} gap={0} colors={'G_10'} />
      </S.GiftsItemPrice>
    </S.GiftsItemWrapper>
  );
};

export default GiftAddButtonsWrapper;
