import present from '../../../../assets/img/gift1_2.png';
import * as S from './GiftAnimation.style';

const StartGiftAnimation = () => {
  return (
    <>
      <S.TextWrapper>
        <S.TitleText>
          <div>함께라서</div> 더 스윗한 마음
        </S.TitleText>
        <S.SubTitleText>여러 명이 선물을 준비하는 가장 쉬운 방법</S.SubTitleText>
      </S.TextWrapper>

      <S.ImgWrapper>
        <img src={present} alt='선물' style={{ width: '22rem' }} />
      </S.ImgWrapper>
    </>
  );
};

export default StartGiftAnimation;
