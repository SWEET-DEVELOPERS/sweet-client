import { useState } from 'react';
import { IcCancel } from '../../../assets/svg';
import GiftAddCompleteBtn from '../GiftAddCompleteBtn/GiftAddCompleteBtn';
import * as S from './GiftAddPageBottom.styled';
import { GiftType } from '../../../types/gift';
import AdImage from '../../../assets/img/ad_img.png';

interface GiftAddPageBottomProps {
  adPrice: string;
  myGiftData: GiftType[];
}

const GiftAddPageBottom = ({ adPrice, myGiftData }: GiftAddPageBottomProps) => {
  const [isAdVisible, setIsAdVisible] = useState(false);

  const handleIcCancelClick = () => {
    setIsAdVisible(false);
  };

  return (
    <S.AddPageDownWrapper>
      <S.GiftAddCompleteBtnWrapper>
        <GiftAddCompleteBtn isCompleted={myGiftData.length >= 1} />
      </S.GiftAddCompleteBtnWrapper>
      {isAdVisible ? (
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
                cursor: 'pointer',
              }}
              onClick={handleIcCancelClick}
            />
          </S.AdHeaderWrapper>
          <S.AdItemWrapper>
            <S.AdItemImg src={AdImage} />
            <S.AdItemDescriptionWrapper>
              <S.AdItemTitle>헤이즈 워시드 와이드 데님 팬츠 (VINTAGE INDIGO)</S.AdItemTitle>
              <S.AdItemPrice>{adPrice}원</S.AdItemPrice>
            </S.AdItemDescriptionWrapper>
          </S.AdItemWrapper>
        </S.AdWrapper>
      ) : (
        ''
      )}
    </S.AddPageDownWrapper>
  );
};

export default GiftAddPageBottom;
