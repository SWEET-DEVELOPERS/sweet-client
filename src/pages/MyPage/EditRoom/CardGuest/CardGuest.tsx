import { IcCancel } from '../../../../assets/svg';
import Type1Tag from '../../../../components/IcTag/Type1/Type1';
import ProfileImage from '../../ProfileImage/ProfileImage';
import Rectangle from '../../../../assets/img/Rectangle.png';
import * as S from './CardGuest.style';

interface CardGuestProps {
  user: string;
  makerState: boolean;
}

const CardGuest = ({ user, makerState }: CardGuestProps) => {
  const handleButton = () => {
    console.log('삭제 되어따!');
  };
  return (
    <S.CardGuestWrapper>
      <S.UserWrapper>
        <ProfileImage image={Rectangle} />
        <S.User>{user}</S.User>
      </S.UserWrapper>
      {makerState ? (
        <Type1Tag tag='개설자' />
      ) : (
        <IcCancel style={{ width: '2.4rem' }} onClick={handleButton} />
      )}
    </S.CardGuestWrapper>
  );
};

export default CardGuest;
