import { IcBookmark, IcEmptyBox } from '../../../assets/svg';
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
          <IcBookmark
            style={{
              position: 'absolute',
              left: '0.8rem',
              top: '-0.4rem',
              width: '2.8rem',
              height: '5.2rem',
            }}
          />
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
