import styled from 'styled-components';
import { IcLeft } from '../../../assets/svg';

interface OnBoardingHeaderProps {
  step?: number;
  onClick?: () => void;
}

const OnBoardingHeader = ({ step, onClick }: OnBoardingHeaderProps) => {
  return (
    <OnBoardingHeaderWrapper>
      <IcLeft style={{ width: '3.6rem', height: '3.6rem' }} onClick={onClick} />
      <StepText>{step}/5</StepText>
    </OnBoardingHeaderWrapper>
  );
};

export default OnBoardingHeader;

const OnBoardingHeaderWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'row', align: 'center', justify: 'space-between' })};
  width: 100%;
  height: 5.6rem;
`;

const StepText = styled.p`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_02};
`;
