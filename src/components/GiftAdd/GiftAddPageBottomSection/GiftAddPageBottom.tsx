import { IcCancel } from '../../../assets/svg';
import GiftAddCompleteBtn from '../GiftAddCompleteBtn/GiftAddCompleteBtn';
import * as S from './GiftAddPageBottom.styled';

interface GiftAddPageBottomProps {
  adPrice: number;
}

const GiftAddPageBottom = ({ adPrice }: GiftAddPageBottomProps) => {
  return (
    <S.AddPageDownWrapper>
      <S.GiftAddCompleteBtnWrapper>
        <GiftAddCompleteBtn />
      </S.GiftAddCompleteBtnWrapper>
      <S.AdWrapper>
        <S.AdHeaderWrapper>
          <S.Body07Text>요즘 2030이 주목하는 선물</S.Body07Text>
          <S.AdTagWrapper>광고</S.AdTagWrapper>
          <IcCancel
            style={{
              position: 'absolute',
              top: '0.1rem',
              right: '1.6rem',
              width: '2rem',
              height: '2rem',
              color: '#E1DEDF',
            }}
          />
        </S.AdHeaderWrapper>
        <S.AdItemWrapper>
          <S.AdItemImg />
          <S.AdItemDescriptionWrapper>
            <S.AdItemTitle>헤이즈 워시드 와이드 데님 팬츠 (VINTAGE INDIGO)</S.AdItemTitle>
            <S.AdItemPrice>{adPrice}원</S.AdItemPrice>
          </S.AdItemDescriptionWrapper>
        </S.AdItemWrapper>
      </S.AdWrapper>
    </S.AddPageDownWrapper>
  );
};

export default GiftAddPageBottom;
