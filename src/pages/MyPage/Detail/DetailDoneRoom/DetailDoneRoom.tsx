import { useNavigate } from 'react-router-dom';
import { IcLogoEmpty } from '../../../../assets/svg';
import DoneCardRoom from '../../../../components/CardRoom/DoneCardRoom';
import BtnSmallStroke from '../../../../components/common/Button/Cta/SmallStroke/BtnSmallStroke';
import useGetDoneRoom from '../../../../hooks/queries/member/useGetClosedRoom';
import { ClosedRoomArrayType } from '../../../../types/member';
import * as S from './DetailDoneRoom.style';
import LeftIconHeader from '../../../../components/LeftIconHeader/LeftIconHeader';

const DetailDoneRoom = () => {
  const navigate = useNavigate();
  const data = useGetDoneRoom()?.data;

  const renderDoneRoomCard = (item: ClosedRoomArrayType, index: number) => (
    <DoneCardRoom
      key={index}
      user={item?.gifteeName}
      srcImage={item?.imageUrl}
      userCount={item?.gifterNumber}
      onClick={() => navigate(`/tournament-ranking/${item.gifteeName}/${item.roomId}`)}
    />
  );

  return (
    <S.DetailDoneRoomWrapper>
      <LeftIconHeader title='종료된 선물방' />
      <S.RoomWrapper>
        {Array.isArray(data) && data.length > 0 ? (
          data.map(renderDoneRoomCard)
        ) : (
          <S.EmptyWrapper title='종료된 선물방'>
            <IcLogoEmpty style={{ width: '8rem', height: '6.4rem' }} />
            <S.EmptyText>준비했던 선물이 없어요</S.EmptyText>
            <BtnSmallStroke customStyle={{ margin: '1.6rem' }}>새로운 선물 준비하기</BtnSmallStroke>
          </S.EmptyWrapper>
        )}
      </S.RoomWrapper>
    </S.DetailDoneRoomWrapper>
  );
};

export default DetailDoneRoom;
