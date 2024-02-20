import styled from 'styled-components';
import { IcLeft } from '../../../assets/svg';

interface OnBoardingHeaderProps {
  step?: number;
  onClick?: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const OnBoardingHeader = ({ step, setStep }: OnBoardingHeaderProps) => {
  const onClick = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <OnBoardingHeaderWrapper>
      <IcLeft width='4rem' height='4rem' onClick={onClick} style={{ marginLeft: '0.7rem' }} />
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
  margin-right: 2rem;
`;
