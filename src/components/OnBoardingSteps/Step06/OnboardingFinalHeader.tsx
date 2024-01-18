import styled from 'styled-components';
import { IcMenu } from '../../../assets/svg';

const OnboardingFinalHeader = () => {
  return (
    <OnboardingFinalHeaderWrapper>
      <IcMenu style={{ width: '2.8rem', height: '2.8rem' }} />
    </OnboardingFinalHeaderWrapper>
  );
};

export default OnboardingFinalHeader;

const OnboardingFinalHeaderWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'row', align: 'center', justify: 'end' })};
  height: 5.6rem;
  margin-right: 1.6rem;
  cursor: pointer;
`;
