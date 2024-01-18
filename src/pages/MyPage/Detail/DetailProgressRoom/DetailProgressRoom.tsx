import { IcLogoEmpty } from '../../../../assets/svg';
import EditCardRoom from '../../../../components/CardRoom/EditCardRoom';
import ProgressCardRoom from '../../../../components/CardRoom/ProgressCardRoom';
import BtnSmallStroke from '../../../../components/common/Button/Cta/SmallStroke/BtnSmallStroke';
import useGetActiveRoom from '../../../../hooks/queries/member/useGetActiveRoom';
import DetailHeader from '../DetailHeader/DetailHeader';
import * as S from './DetailProgress.style';

const DetailProgressRoom = () => {
  const data = useGetActiveRoom()?.data;
  console.log(data);
  return (
    <S.DetailProgressRoomWrapper>
      <DetailHeader title='진행중인 선물방' />
      <S.RoomWrapper>
        {Array.isArray(data) ? (
          data.map((item, index) =>
            item.isOwner ? (
              <EditCardRoom
                key={index}
                user={item.gifteeName}
                userCount={item.gifterNumber}
                srcImage={item.imageUrl}
                roomId={item.roomId}
              />
            ) : (
              <ProgressCardRoom
                key={index}
                user={item.gifteeName || ''}
                userCount={item.gifterNumber || 0}
                srcImage={item.imageUrl || ''}
                roomId={item.roomId}
              />
            ),
          )
        ) : (
          <S.EmptyWrapper title='진행중인 선물방'>
            <IcLogoEmpty style={{ width: '8rem', height: '6.4rem' }} />
            <S.EmptyText>준비했던 선물이 없어요</S.EmptyText>
            <BtnSmallStroke customStyle={{ margin: '1.6rem' }}>새로운 선물 준비하기</BtnSmallStroke>
          </S.EmptyWrapper>
        )}
      </S.RoomWrapper>
    </S.DetailProgressRoomWrapper>
  );
};

export default DetailProgressRoom;
