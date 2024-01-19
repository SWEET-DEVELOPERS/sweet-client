import { IcLeft } from '../../../../../assets/svg';
import MiniTimer from '../../../../common/MiniTimer/MiniTimer';
import * as S from './LinkAddHeader.styled';

interface LinkAddHeaderProps {
  targetDate: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const LinkAddHeader = ({ targetDate, step, setStep }: LinkAddHeaderProps) => {
  const onClickBackBtn = () => {
    if (step === 1) {
      setStep(0);
    } else if (step === 2 || step === 3) {
      setStep(1);
    }
  };
  return (
    <S.LinkAddHeaderWrapper>
      <IcLeft
        onClick={onClickBackBtn}
        style={{
          width: '3.6rem',
          height: '3.6rem',
          position: 'absolute',
          left: '0.7rem',
          cursor: 'pointer',
        }}
      />
      <MiniTimer targetDate={targetDate} />
    </S.LinkAddHeaderWrapper>
  );
};

export default LinkAddHeader;
