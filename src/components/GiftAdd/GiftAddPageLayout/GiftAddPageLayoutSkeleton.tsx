import * as S from './GiftAddPageLayoutSkeleton.style';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const GiftsItemWrapper = () => (
  <>
    <S.GiftsItemWrapper>
      <Skeleton wrapper={S.GiftsItemImage} containerClassName='flex: 1' />
      <Skeleton wrapper={S.GiftsItemTitle} containerClassName='flex: 1' />
      <Skeleton wrapper={S.GiftsItemTitle2} containerClassName='flex: 1' />
    </S.GiftsItemWrapper>
  </>
);

const GiftAddPageLayoutSkeleton = () => {
  console.log('SKELETON');
  return (
    <SkeletonTheme>
      <S.GiftAddPageWrapper>
        <S.GiftAddPageSkeletonHeader>
          <S.HeaderText>내가 등록한 선물</S.HeaderText>
        </S.GiftAddPageSkeletonHeader>
        <Skeleton wrapper={S.MiniTimerWrapper} containerClassName='flex: 1' />
        <S.AddButtonsWrapper>
          <GiftsItemWrapper />
          <GiftsItemWrapper />
        </S.AddButtonsWrapper>
      </S.GiftAddPageWrapper>
    </SkeletonTheme>
  );
};

export default GiftAddPageLayoutSkeleton;
