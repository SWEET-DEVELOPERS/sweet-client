import { IcRight } from '../../../../assets/svg';
import * as S from './GiftRoomHeader.style';

interface GiftRoomHeaderProps {
  name: string;
}

const GiftRoomHeader = ({ name }: GiftRoomHeaderProps) => {
  return (
    <S.Wrapper>
      <S.Text>{name}</S.Text>
      <IcRight style={{ width: '2.4rem' }} />
    </S.Wrapper>
  );
};
export default GiftRoomHeader;
