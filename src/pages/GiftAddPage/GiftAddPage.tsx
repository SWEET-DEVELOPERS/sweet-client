import { position } from 'stylis';
import { IcCancel, IcEmptyBox } from '../../assets/svg';
import GiftAddCompleteBtn from '../../components/GiftAdd/GiftAddCompleteBtn';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import * as S from './GiftAddPage.styled';

function GiftAddPage() {
  const isExist = false;
  const isExist2 = true;
  const price = 42000;

  return (
    <S.GiftAddPageWrapper>
      {/* 헤더 추가 예정 */}
      <MiniTimer time={'00:00:00'} />
      <S.AddButtonsWrapper>
        {isExist ? (
          <S.GiftsItemWrapper>
            <S.GiftsItemImage></S.GiftsItemImage>
            <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
            <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
          </S.GiftsItemWrapper>
        ) : (
          <S.IcEmptyBoxWrapper>
            <IcEmptyBox width={159} height={160} />
          </S.IcEmptyBoxWrapper>
        )}
        {isExist2 ? (
          <S.GiftsItemWrapper>
            <S.GiftsItemImage></S.GiftsItemImage>
            <S.GiftsItemTitle>어센틱 로고 후디 멜란지 그레이</S.GiftsItemTitle>
            <S.GiftsItemPrice>{price}원</S.GiftsItemPrice>
          </S.GiftsItemWrapper>
        ) : (
          <S.IcEmptyBoxWrapper>
            <IcEmptyBox width={159} height={160} />
          </S.IcEmptyBoxWrapper>
        )}
      </S.AddButtonsWrapper>
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
                top: '1',
                right: '16',
                width: '20',
                height: '20',
                color: '#E1DEDF',
              }}
            />
          </S.AdHeaderWrapper>
          <S.AdItemWrapper>
            <S.AdItemImg />
            <S.AdItemDescriptionWrapper>
              <S.AdItemTitle>헤이즈 워시드 와이드 데님 팬츠 (VINTAGE INDIGO)</S.AdItemTitle>
              <S.AdItemPrice>{price}원</S.AdItemPrice>
            </S.AdItemDescriptionWrapper>
          </S.AdItemWrapper>
        </S.AdWrapper>
      </S.AddPageDownWrapper>
    </S.GiftAddPageWrapper>
  );
}

export default GiftAddPage;
