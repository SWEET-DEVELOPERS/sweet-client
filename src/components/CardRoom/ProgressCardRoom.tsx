import * as S from './CardRoom.style';
import { IcUser } from '../../assets/svg';
import Type2Tag from '../IcTag/Type2/Type2';
import DateCheck from '../DateCheck/DateCheck';

interface ProgressCardRoomType {
  user: string;
  srcImage: string;
  userCount: number;
  roomId: number;
  date: string;
  onClick: VoidFunction;
}

const ProgressCardRoom = ({ user, srcImage, userCount, date, onClick }: ProgressCardRoomType) => {
  const isFuture = DateCheck({ date: date });
  const multiline = user.length > 3 || (/[a-zA-Z]/.test(user) && user.length > 5);

  return (
    <S.CardRoomWrapper onClick={onClick}>
      <div>
        <S.RoomImgWrapper src={srcImage} />
        <S.Text>
          {multiline ? (
            <>
              <S.User>{user}님</S.User>을 위한 선물방
            </>
          ) : (
            <S.User>{user}님을 위한 선물방</S.User>
          )}
        </S.Text>
        <S.CountUser>
          <IcUser
            style={{
              width: '1.6rem',
              height: '1.6rem',
              color: '#ACA7A9',
              position: 'relative',
              top: '0.2rem',
            }}
          />
          {userCount}
        </S.CountUser>
      </div>
      <S.TagWrapper>
        {!isFuture ? <Type2Tag tag='토너먼트 진행 중' /> : <Type2Tag tag='선물 등록 중' />}
      </S.TagWrapper>
    </S.CardRoomWrapper>
  );
};

export default ProgressCardRoom;
