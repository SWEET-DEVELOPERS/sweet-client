import styled from 'styled-components';

interface OnBoardingHeaderProps {
  step?: number;
  onClick?: () => void;
}

const OnBoardingHeader = ({ step, onClick }: OnBoardingHeaderProps) => {
  return (
    <OnBoardingHeaderWrapper>
      <StepText>{step}/5</StepText>
    </OnBoardingHeaderWrapper>
  );
};

export default OnBoardingHeader;

const OnBoardingHeaderWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'row', align: 'center', justify: 'end' })};
  width: 100%;
  height: 5.6rem;
`;

const StepText = styled.p`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_02};
`;
