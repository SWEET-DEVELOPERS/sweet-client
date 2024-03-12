import * as S from './CardRoom.style';
import { IcUser } from '../../assets/svg';
import Type3Tag from '../IcTag/Type3/Type3';
import Skeleton from 'react-loading-skeleton';
import { Suspense } from 'react';

interface DoneCardRoomType {
  user: string;
  srcImage: string;
  userCount: number;
  onClick: VoidFunction;
}

const DoneCardRoom = ({ user, srcImage, userCount, onClick }: DoneCardRoomType) => {
  const multiline = user.length > 3 || (/[a-zA-Z]/.test(user) && user.length > 5);
  return (
    <S.CardRoomWrapper onClick={onClick}>
      <Suspense fallback={<Skeleton />}>
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
            <IcUser style={{ width: '1.6rem', height: '1.6rem', color: '#ACA7A9' }} />
            {userCount}
          </S.CountUser>
        </div>
        <S.TagWrapper>
          <Type3Tag tag='토너먼트 완료' />
        </S.TagWrapper>
      </Suspense>
    </S.CardRoomWrapper>
  );
};

export default DoneCardRoom;
