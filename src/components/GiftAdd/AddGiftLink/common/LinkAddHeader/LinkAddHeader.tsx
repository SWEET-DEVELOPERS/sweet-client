import { IcLeft } from '../../../../../assets/svg';
import MiniTimer from '../../../../common/MiniTimer/MiniTimer';
import * as S from './LinkAddHeader.styled';

const LinkAddHeader = () => {
  return (
    <S.LinkAddHeaderWrapper>
      <IcLeft style={{ width: '3.6rem', height: '3.6rem', position: 'absolute', left: '0.7rem' }} />
      <MiniTimer time={'00:00:00'} />
    </S.LinkAddHeaderWrapper>
  );
};

export default LinkAddHeader;
