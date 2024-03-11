import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './Skeleton.style';

const OnboardingSkeleton = () => {
  return (
    <S.OnboardingSkeletonWrapper>
      <S.TitleWrapper>
        <Skeleton
          count={1}
          style={{
            width: '12.3rem',
            height: '2.4rem',
          }}
        />
        <Skeleton
          count={1}
          style={{
            width: '10.2rem',
            height: '2.4rem',
          }}
        />
        <Skeleton
          count={1}
          style={{
            width: '18.9rem',
            height: '2.4rem',
          }}
        />
      </S.TitleWrapper>
      <S.DetailWrapper>
        <Skeleton style={{ width: '100%', height: '0.1rem' }} />
      </S.DetailWrapper>
    </S.OnboardingSkeletonWrapper>
  );
};

export default OnboardingSkeleton;
