import { IcLeft } from '../../../../../assets/svg';
import MiniTimer from '../../../../common/MiniTimer/MiniTimer';
import * as S from './LinkAddHeader.styled';

interface LinkAddHeaderProps {
  targetDate: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const LinkAddHeader = ({ targetDate, setStep }: LinkAddHeaderProps) => {
  const onClickBackBtn = () => {
    setStep(1);
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
          marginTop: '5.6rem',
        }}
      />
      <MiniTimer targetDate={targetDate} />
    </S.LinkAddHeaderWrapper>
  );
};

export default LinkAddHeader;
