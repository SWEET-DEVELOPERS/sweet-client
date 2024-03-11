import * as S from './GiftAddPageLayoutSkeleton.style';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const GiftsItemWrapper = () => (
  <>
    <S.GiftsItemWrapper>
      <Skeleton
        count={1}
        style={{
          width: '15.8rem',
          height: '15.8rem',
          borderRadius: '0.4rem',
          backgroundColor: '#EBE9EA',
        }}
        containerClassName='flex: 1'
      />
      <Skeleton
        count={1}
        style={{
          width: '14.6rem',
          height: '2rem',
          marginTop: '1.4rem',
          marginBottom: '0.5rem',
          borderRadius: '0.4rem',
          backgroundColor: '#EBE9EA',
        }}
        containerClassName='flex: 1'
      />
      <Skeleton
        count={1}
        style={{
          width: '9.4rem',
          height: '2rem',
          borderRadius: '0.4rem',
          backgroundColor: '#EBE9EA',
        }}
        containerClassName='flex: 1'
      />
    </S.GiftsItemWrapper>
  </>
);

const GiftAddPageLayoutSkeleton = () => {
  console.log('SKELETON');
  return (
    <SkeletonTheme highlightColor='#f5f5f5' duration={1}>
      <S.GiftAddPageWrapper>
        <S.GiftAddPageSkeletonHeader>
          <S.HeaderText>내가 등록한 선물</S.HeaderText>
        </S.GiftAddPageSkeletonHeader>
        <Skeleton
          count={1}
          style={{
            width: '10.3rem',
            height: '2.7rem',
            borderRadius: '1.4rem',
            backgroundColor: '#F8F8F8',
          }}
          containerClassName='flex: 1'
        />
        <S.AddButtonsWrapper>
          <GiftsItemWrapper />
          <GiftsItemWrapper />
        </S.AddButtonsWrapper>
      </S.GiftAddPageWrapper>
    </SkeletonTheme>
  );
};

export default GiftAddPageLayoutSkeleton;
