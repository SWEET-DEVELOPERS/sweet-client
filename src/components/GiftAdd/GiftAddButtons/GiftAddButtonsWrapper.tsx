import { IcBookmark, IcCancelCircle, IcEmptyBox } from '../../../assets/svg';
import * as S from './GiftAddButtonsWrapper.styled';

interface GiftAddButtonsProps {
  isExist: boolean;
  price: number;
  onClick: () => void;
}

const GiftAddButtonsWrapper = ({ isExist, price, onClick }: GiftAddButtonsProps) => {
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
          <IcCancelCircle
            style={{
              position: 'absolute',
              right: '0.5rem',
              top: '0.5rem',
              width: '1.8rem',
              height: '1.8rem',
              fill: '#F8F8F8',
              color: '#868384',
            }}
          />
          <S.GiftsItemImage></S.GiftsItemImage>
          <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
          <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
        </S.GiftsItemWrapper>
      ) : (
        <S.IcEmptyBoxWrapper onClick={onClick}>
          <IcEmptyBox style={{ width: '15.9rem', height: '16rem' }} />
        </S.IcEmptyBoxWrapper>
      )}
    </>
  );
};

export default GiftAddButtonsWrapper;
