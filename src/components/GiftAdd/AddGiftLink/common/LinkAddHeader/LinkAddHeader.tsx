import { IcLeft } from '../../../../../assets/svg';
import { AddGiftInfo } from '../../../../../types/gift';
import MiniTimer from '../../../../common/MiniTimer/MiniTimer';
import * as S from './LinkAddHeader.styled';

interface LinkAddHeaderProps {
  targetDate: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  name?: string;
  cost?: number | null;
  imageUrl?: string;
  url?: string;
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void;
  gifteeName: string;
}

const LinkAddHeader = ({
  targetDate,
  step,
  setStep,
  name,
  cost,
  imageUrl,
  // url,
  updateAddGiftInfo,
  gifteeName,
}: LinkAddHeaderProps) => {
  const onClickBackBtn = () => {
    if (step === 1) {
      updateAddGiftInfo({ name: '', cost: '', imageUrl: '', url: '' });
      setStep(0);
    } else if (step === 2 || step === 3) {
      updateAddGiftInfo({ name: name, cost: cost, imageUrl: imageUrl });
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
      <MiniTimer targetDate={targetDate} giftee={gifteeName} />
    </S.LinkAddHeaderWrapper>
  );
};

export default LinkAddHeader;
