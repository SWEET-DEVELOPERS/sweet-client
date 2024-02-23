import * as S from './CardRoom.style';
import { IcSettings, IcUser } from '../../assets/svg';
import Type2Tag from '../IcTag/Type2/Type2';
import Type1Tag from '../IcTag/Type1/Type1';
import { useNavigate } from 'react-router';
import DateCheck from '../DateCheck/DateCheck';

interface EditCardRoomType {
  user: string;
  srcImage: string;
  userCount: number;
  roomId: number;
  date: string;
  onClick: VoidFunction;
}

const EditCardRoom = ({ user, srcImage, userCount, roomId, date, onClick }: EditCardRoomType) => {
  const navigate = useNavigate();
  const isFuture = DateCheck({ date: date });

  const handleSettingIcon = () => {
    navigate(`/editpage/${roomId}`);
  };
  const multiline = user.length > 3 || (/[a-zA-Z]/.test(user) && user.length > 5);
  return (
    <S.WholeWrapper>
      <S.CardRoomWrapper onClick={onClick}>
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
              top: '-0.1rem',
            }}
          />
          {userCount}
        </S.CountUser>
        <S.TagWrapper>
          <Type1Tag tag='개설자' />
          {!isFuture ? <Type2Tag tag='토너먼트 진행 중' /> : <Type2Tag tag='선물 등록 중' />}
        </S.TagWrapper>
      </S.CardRoomWrapper>
      <S.SettingWrapper onClick={handleSettingIcon}>
        <IcSettings style={{ width: '2.4rem', height: '2.4rem', color: 'white' }} />
      </S.SettingWrapper>
    </S.WholeWrapper>
  );
};

export default EditCardRoom;
