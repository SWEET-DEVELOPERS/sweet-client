import styled from 'styled-components';

export const OnboardingSkeletonWrapper = styled.div`
  gap: 11.6rem;
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'column' })};
  gap: 0.9rem;
  border-radius: 4px;
`;

export const DetailWrapper = styled.div`
  margin-top: 11.6rem;
`;
