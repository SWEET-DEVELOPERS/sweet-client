import styled from 'styled-components';
import { IcLeft } from '../../../assets/svg';

interface OnBoardingHeaderProps {
  step?: number;
  // onClick?: () => void;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
  onClickBackBtn: (stemNum: number | undefined) => void;
  stepNum?: number | undefined;
}

const OnBoardingHeader = ({ step, onClickBackBtn, stepNum }: OnBoardingHeaderProps) => {
  return (
    <OnBoardingHeaderWrapper>
      <IcLeft
        width='4rem'
        height='4rem'
        onClick={() => onClickBackBtn(stepNum)}
        style={{ marginLeft: '0.7rem' }}
      />
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
