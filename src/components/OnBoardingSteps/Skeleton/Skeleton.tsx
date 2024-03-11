import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const OnboardingSkeleton = () => {
  return (
    <OnboardingSkeletonWrapper>
      <TitleWrapper>
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
      </TitleWrapper>
      <DetailWrapper>
        <Skeleton style={{ width: '100%', height: '0.1rem' }} />
      </DetailWrapper>
    </OnboardingSkeletonWrapper>
  );
};

export default OnboardingSkeleton;

const OnboardingSkeletonWrapper = styled.div`
  gap: 11.6rem;
`;

const TitleWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'column' })};
  gap: 0.9rem;
  border-radius: 4px;
`;

const DetailWrapper = styled.div`
  margin-top: 11.6rem;
`;
