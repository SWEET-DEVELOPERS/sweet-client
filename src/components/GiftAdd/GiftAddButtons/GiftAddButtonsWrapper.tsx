import { IcEmptyBox } from '../../../assets/svg';
import * as S from './GiftAddButtonsWrapper.styled';

interface GiftAddButtonsProps {
  isExist: boolean;
  price: number;
}

const GiftAddButtonsWrapper = ({ isExist, price }: GiftAddButtonsProps) => {
  return (
    <>
      {isExist ? (
        <S.GiftsItemWrapper>
          <S.GiftsItemImage></S.GiftsItemImage>
          <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
          <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
        </S.GiftsItemWrapper>
      ) : (
        <S.IcEmptyBoxWrapper>
          <IcEmptyBox style={{ width: '15.9rem', height: '16rem' }} />
        </S.IcEmptyBoxWrapper>
      )}
    </>
  );
};

export default GiftAddButtonsWrapper;
