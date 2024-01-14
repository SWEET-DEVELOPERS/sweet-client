import { IcLeft, IcMenu } from '../../../assets/svg';
import * as S from './GiftHomeHeader.style';

const GiftHomeHeader = () => {
  return (
    <S.GiftHomeHeaderWrapper>
      <IcLeft style={{ width: '3.6rem', height: '3.6rem', cursor: 'pointer' }} />
      <IcMenu style={{ width: '2.8rem', height: '2.8rem', cursor: 'pointer' }} />
    </S.GiftHomeHeaderWrapper>
  );
};

export default GiftHomeHeader;
