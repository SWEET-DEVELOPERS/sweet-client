import { IcLeft } from '../../../../../assets/svg';
import MiniTimer from '../../../../common/MiniTimer/MiniTimer';
import * as S from './LinkAddHeader.styled';

interface LinkAddHeaderProps {
  targetDate: string;
}

const LinkAddHeader = ({ targetDate }: LinkAddHeaderProps) => {
  return (
    <S.LinkAddHeaderWrapper>
      <IcLeft style={{ width: '3.6rem', height: '3.6rem', position: 'absolute', left: '0.7rem' }} />
      <MiniTimer targetDate={targetDate} />
    </S.LinkAddHeaderWrapper>
  );
};

export default LinkAddHeader;
